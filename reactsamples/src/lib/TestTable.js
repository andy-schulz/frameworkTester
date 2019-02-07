import React from 'react';
import { Table } from 'reactstrap';

export default class TestTable extends React.Component {
    render() {
        return (
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Arthur</td>
                                    <td>James</td>
                                    <td>Jupiter</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>the Royal</td>
                    <td>@royal</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}