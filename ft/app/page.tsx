import React from "react";
import ClientButton from "@/app/ui/clientButton";
import Explanation from "@/app/ui/Explanation";
import BorderedContent from "@/app/ui/LabledContent";
import Text from "@/app/ui/RowText";
import SpanHighlight from "@/app/ui/SpanHighlight";
import CopyCode from "@/app/ui/CopyCode";

export default function Home() {

    return (
        <main className="flex flex-col">

            <div className="flex flex-row text-sm content-center">

                <div className={"basis-1/3 space-y-4 p-1 justify-stretch"}>
                    <Explanation>Find elements by id, class and text</Explanation>

                </div>

                <div className={"basis-1/3 flex flex-col flex-grow space-y-4 p-1 justify-stretch"}>

                    <BorderedContent
                        label={<Text>Button with <SpanHighlight>class</SpanHighlight> to
                            select.<CopyCode>.ButtonWithClassName</CopyCode></Text>}>
                        <ClientButton
                            id={"classSelectButton"}
                            className={"ButtonWithClassName"}
                        >{"Button with class"}</ClientButton>
                    </BorderedContent>


                    <BorderedContent
                        label={<Text>Button with <SpanHighlight>id</SpanHighlight> to
                            select.<CopyCode>#ButtonWithId</CopyCode></Text>}>
                        <ClientButton
                            id="ButtonWithId"
                        >{"Button with id"}</ClientButton>
                    </BorderedContent>


                    <BorderedContent
                        label={<Text>Button with <SpanHighlight>text</SpanHighlight> to
                            select.<CopyCode>&quot;Text 85d689d2&quot;</CopyCode></Text>}>
                        <ClientButton>
                            {"Text 85d689d2"}
                        </ClientButton>
                    </BorderedContent>

                    <div className={"parentOne"}>
                        <BorderedContent
                            label={<Text>Button with <SpanHighlight>chained selector</SpanHighlight> to
                                select.<CopyCode>.parentOne .chainedButton</CopyCode></Text>}>
                            <ClientButton
                                className={"chainedButton"}>
                                {"First Chained Button"}
                            </ClientButton>
                        </BorderedContent>
                    </div>
                    <div className={"parentTwo"}>
                        <BorderedContent
                            label={<Text>Button with <SpanHighlight>chained selector</SpanHighlight> to
                                select.<CopyCode>.parentTwo .chainedButton</CopyCode></Text>}>
                            <ClientButton
                                className={"chainedButton"}>
                                {"Second Chained Button"}
                            </ClientButton>
                        </BorderedContent>
                    </div>


                </div>

                {/*<div className={"basis-1/3 flex flex-col space-y-4 p-1 justify-stretch"}>*/}
                {/*</div>*/}

            </div>

            <div className="flex flex-row text-sm content-center">

                <div className={"basis-1/3 space-y-4 p-1 justify-stretch"}>
                    <Explanation>Use text and password fields.</Explanation>

                </div>

                <div className={"basis-1/3 flex flex-col flex-grow space-y-4 p-1 justify-stretch"}>

                    <BorderedContent
                        label={<Text>Text Field with <SpanHighlight>id</SpanHighlight> to
                            select.<CopyCode>#first_name</CopyCode></Text>}>

                        <div>
                            <label htmlFor="first_name"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                name</label>
                            <input type="text" id="first_name"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="John" required/>
                        </div>
                    </BorderedContent>
                    <BorderedContent
                        label={<Text>Password field with <SpanHighlight>id</SpanHighlight> to
                            select.<CopyCode>#password</CopyCode></Text>}>
                        <div className="mb-6">
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="password"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="•••••••••" required/>
                        </div>
                    </BorderedContent>


                </div>

                {/*<div className={"basis-1/3 flex flex-col space-y-4 p-1 justify-stretch"}>*/}
                {/*</div>*/}

            </div>
        </main>
    );
}
