"use client";
import React, { useState, DragEvent } from "react";
import Explanation from "@/app/ui/Explanation";
import BorderedContent from "@/app/ui/LabledContent";
import Text from "@/app/ui/RowText";
import CopyCode from "@/app/ui/CopyCode";
import SpanHighlight from "@/app/ui/SpanHighlight";
import { setHeaderText } from "@/lib/setTextToElement";

interface DraggableItem {
    id: string;
    text: string;
    zone: string;
    position: number;
    color: string;
}

export default function DragAndDropPage() {
    const [items, setItems] = useState<DraggableItem[]>([
        { id: "item-1", text: "Item 1", zone: "source", position: 0, color: "bg-blue-500 hover:bg-blue-600" },
        { id: "item-2", text: "Item 2", zone: "source", position: 1, color: "bg-cyan-500 hover:bg-cyan-600" },
        { id: "item-3", text: "Item 3", zone: "source", position: 2, color: "bg-sky-500 hover:bg-sky-600" },
        { id: "item-4", text: "Item 4", zone: "source", position: 3, color: "bg-indigo-500 hover:bg-indigo-600" },
        { id: "item-5", text: "Item 5", zone: "source", position: 4, color: "bg-blue-600 hover:bg-blue-700" },
        { id: "item-6", text: "Item 6", zone: "source", position: 5, color: "bg-cyan-600 hover:bg-cyan-700" },
        { id: "item-7", text: "Item 7", zone: "source", position: 6, color: "bg-sky-600 hover:bg-sky-700" },
        { id: "item-8", text: "Item 8", zone: "source", position: 7, color: "bg-indigo-600 hover:bg-indigo-700" },
        { id: "item-9", text: "Item 9", zone: "source", position: 8, color: "bg-blue-400 hover:bg-blue-500" },
        { id: "item-10", text: "Item 10", zone: "source", position: 9, color: "bg-cyan-400 hover:bg-cyan-500" },
    ]);

    const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
    const [dragOverItemId, setDragOverItemId] = useState<string | null>(null);

    const handleDragStart = (e: DragEvent<HTMLDivElement>, itemId: string) => {
        setDraggedItemId(itemId);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", itemId);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    const handleDragOverItem = (e: DragEvent<HTMLDivElement>, itemId: string) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOverItemId(itemId);
    };

    const handleDragLeaveItem = () => {
        setDragOverItemId(null);
    };

    const handleDropOnItem = (e: DragEvent<HTMLDivElement>, targetItemId: string) => {
        e.preventDefault();
        e.stopPropagation();

        if (!draggedItemId || draggedItemId === targetItemId) {
            setDragOverItemId(null);
            return;
        }

        const draggedItem = items.find(item => item.id === draggedItemId);
        const targetItem = items.find(item => item.id === targetItemId);

        if (!draggedItem || !targetItem) {
            setDragOverItemId(null);
            return;
        }

        // If both items are in the same zone, sort them
        if (draggedItem.zone === targetItem.zone) {
            const zoneItems = items
                .filter(item => item.zone === targetItem.zone)
                .sort((a, b) => a.position - b.position);

            const draggedIndex = zoneItems.findIndex(item => item.id === draggedItemId);
            const targetIndex = zoneItems.findIndex(item => item.id === targetItemId);

            // Remove the dragged item and insert it at the new position
            const [removed] = zoneItems.splice(draggedIndex, 1);
            zoneItems.splice(targetIndex, 0, removed);

            // Update positions
            const updatedZoneItems = zoneItems.map((item, index) => ({
                ...item,
                position: index
            }));

            // Merge with the other items
            const otherItems = items.filter(item => item.zone !== targetItem.zone);
            setItems([...otherItems, ...updatedZoneItems]);

            // Update header with action info
            const zoneName = getZoneName(draggedItem.zone);
            setHeaderText(`Reordered: ${draggedItem.text} moved from position ${draggedIndex + 1} to position ${targetIndex + 1} in ${zoneName}`);
        } else {
            // Different zones: move the item to the new zone
            const targetZoneItems = items
                .filter(item => item.zone === targetItem.zone)
                .sort((a, b) => a.position - b.position);

            const targetIndex = targetZoneItems.findIndex(item => item.id === targetItemId);
            const newPosition = targetIndex;

            // Update positions in the target zone
            const updatedTargetZoneItems = targetZoneItems.map((item, index) => ({
                ...item,
                position: index >= newPosition ? index + 1 : index
            }));

            // Update the dragged item
            const updatedDraggedItem = {
                ...draggedItem,
                zone: targetItem.zone,
                position: newPosition
            };

            // Merge everything together
            const otherItems = items.filter(
                item => item.id !== draggedItemId && item.zone !== targetItem.zone
            );

            setItems([...otherItems, ...updatedTargetZoneItems, updatedDraggedItem]);

            // Update header with action info
            const sourceZoneName = getZoneName(draggedItem.zone);
            const targetZoneName = getZoneName(targetItem.zone);
            setHeaderText(`Dragged: ${draggedItem.text} from ${sourceZoneName} to ${targetZoneName} at position ${newPosition + 1}`);
        }

        setDraggedItemId(null);
        setDragOverItemId(null);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>, targetZone: string) => {
        e.preventDefault();
        if (draggedItemId) {
            const draggedItem = items.find(item => item.id === draggedItemId);
            if (!draggedItem) return;

            // If the item is already in the zone, do nothing
            if (draggedItem.zone === targetZone) {
                setDraggedItemId(null);
                return;
            }

            // Add the item at the end of the zone
            const targetZoneItems = items.filter(item => item.zone === targetZone);
            const newPosition = targetZoneItems.length;

            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === draggedItemId
                        ? { ...item, zone: targetZone, position: newPosition }
                        : item
                )
            );

            // Update header with action info
            const sourceZoneName = getZoneName(draggedItem.zone);
            const targetZoneName = getZoneName(targetZone);
            setHeaderText(`Dragged: ${draggedItem.text} from ${sourceZoneName} to ${targetZoneName}`);

            setDraggedItemId(null);
        }
    };

    const getItemsByZone = (zone: string) => {
        return items
            .filter((item) => item.zone === zone)
            .sort((a, b) => a.position - b.position);
    };

    const getZoneName = (zone: string): string => {
        const zoneNames: { [key: string]: string } = {
            'source': 'Source Zone',
            'zone-a': 'Zone A',
            'zone-b': 'Zone B',
            'zone-c': 'Zone C'
        };
        return zoneNames[zone] || zone;
    };

    const renderItem = (item: DraggableItem) => (
        <div
            key={item.id}
            data-testid={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDragOver={(e) => handleDragOverItem(e, item.id)}
            onDragLeave={handleDragLeaveItem}
            onDrop={(e) => handleDropOnItem(e, item.id)}
            className={`
                p-4 m-2 ${item.color} text-white rounded-lg cursor-move
                transition-all duration-200
                shadow-md hover:shadow-lg
                ${draggedItemId === item.id ? "opacity-50" : "opacity-100"}
                ${dragOverItemId === item.id ? "ring-4 ring-yellow-400 ring-inset" : ""}
            `}
        >
            {item.text}
        </div>
    );

    return (
        <div>
            <div className="flex flex-row text-sm content-center">
                <div className={"basis-1/3 space-y-4 p-1 justify-stretch"}>
                    <Explanation>
                        Test drag and drop functionality with draggable items that can be moved
                        between different zones and sorted within zones.
                    </Explanation>
                    <BorderedContent label={<Text>Usage</Text>}>
                        <div className="space-y-2 text-xs">
                            <p>
                                <SpanHighlight>Draggable Items:</SpanHighlight> Use test IDs like{" "}
                                <CopyCode>item-1</CopyCode> through <CopyCode>item-10</CopyCode>
                            </p>
                            <p>
                                <SpanHighlight>Drop Zones:</SpanHighlight> Use test IDs{" "}
                                <CopyCode>zone-source</CopyCode>, <CopyCode>zone-a</CopyCode>,{" "}
                                <CopyCode>zone-b</CopyCode>, <CopyCode>zone-c</CopyCode>
                            </p>
                            <p>
                                <SpanHighlight>Sorting:</SpanHighlight> Drag items onto other items
                                within the same zone to reorder them. A yellow border indicates the drop position.
                            </p>
                        </div>
                    </BorderedContent>
                </div>

                <div className={"basis-2/3 flex flex-col space-y-4 p-1"}>
                    <BorderedContent
                        label={
                            <Text>
                                Source Zone <CopyCode>zone-source</CopyCode>
                            </Text>
                        }
                    >
                        <div
                            data-testid="zone-source"
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, "source")}
                            className="min-h-[200px] border-2 border-dashed border-gray-400 rounded-lg p-4 bg-gray-50"
                        >
                            <div className="grid grid-cols-2 gap-2">
                                {getItemsByZone("source").map(renderItem)}
                            </div>
                            {getItemsByZone("source").length === 0 && (
                                <div className="text-center text-gray-400 py-8">
                                    Drop items here
                                </div>
                            )}
                        </div>
                    </BorderedContent>

                    <div className="grid grid-cols-3 gap-4">
                        <BorderedContent
                            label={
                                <Text>
                                    Zone A <CopyCode>zone-a</CopyCode>
                                </Text>
                            }
                        >
                            <div
                                data-testid="zone-a"
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, "zone-a")}
                                className="min-h-[150px] border-2 border-dashed border-green-400 rounded-lg p-4 bg-green-50"
                            >
                                {getItemsByZone("zone-a").map(renderItem)}
                                {getItemsByZone("zone-a").length === 0 && (
                                    <div className="text-center text-gray-400 py-8 text-xs">
                                        Zone A
                                    </div>
                                )}
                            </div>
                        </BorderedContent>

                        <BorderedContent
                            label={
                                <Text>
                                    Zone B <CopyCode>zone-b</CopyCode>
                                </Text>
                            }
                        >
                            <div
                                data-testid="zone-b"
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, "zone-b")}
                                className="min-h-[150px] border-2 border-dashed border-yellow-400 rounded-lg p-4 bg-yellow-50"
                            >
                                {getItemsByZone("zone-b").map(renderItem)}
                                {getItemsByZone("zone-b").length === 0 && (
                                    <div className="text-center text-gray-400 py-8 text-xs">
                                        Zone B
                                    </div>
                                )}
                            </div>
                        </BorderedContent>

                        <BorderedContent
                            label={
                                <Text>
                                    Zone C <CopyCode>zone-c</CopyCode>
                                </Text>
                            }
                        >
                            <div
                                data-testid="zone-c"
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, "zone-c")}
                                className="min-h-[150px] border-2 border-dashed border-purple-400 rounded-lg p-4 bg-purple-50"
                            >
                                {getItemsByZone("zone-c").map(renderItem)}
                                {getItemsByZone("zone-c").length === 0 && (
                                    <div className="text-center text-gray-400 py-8 text-xs">
                                        Zone C
                                    </div>
                                )}
                            </div>
                        </BorderedContent>
                    </div>
                </div>
            </div>
        </div>
    );
}
