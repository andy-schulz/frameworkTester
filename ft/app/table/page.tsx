export default function FirstPost() {
    // return <h1>First Post</h1>;

    // generate table with 50 rows and 5 columns
    return (
        <table>
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                    <th>Column 4</th>
                    <th>Column 5</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({length: 200}).map((_, i) => (
                    <tr key={i}>
                        <td data-test-id={"rowId_" + (i + 1)}>Row {i + 1} column 1</td>
                        <td>Row {i + 1} column 2</td>
                        <td>Row {i + 1} column 3</td>
                        <td>Row {i + 1} column 4</td>
                        <td>Row {i + 1} column 5</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}