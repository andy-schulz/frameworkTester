import React from 'react';
import { Table } from 'reactstrap';

export default class LargeTable extends React.Component {
    render() {
        return (
            <Table cellPadding="1" cellSpacing="1">
                <tr data-test-id="tableHeader" className="tableHeader">
                    <th>One</th>
                    <th>Two</th>
                    <th>Three</th>
                    <th>Four</th>
                </tr>
                <tr data-test-id="firstTableRow" className="firstTableRow">
                    <td>Plato</td>
                    <td>19191919-0303-0202</td>
                    <td>723-3656 Nunc Ave</td>
                    <td>Weymouth</td>
                </tr>
                <tr>
                    <td>Rafael</td>
                    <td>19191919-1111-1717</td>
                    <td>P.O. Box 468, 6854 At St.</td>
                    <td>Zeveneken</td>
                </tr>
                <tr>
                    <td>Nash</td>
                    <td>18181818-0909-0101</td>
                    <td>7328 Libero Rd.</td>
                    <td>Attimis</td>
                </tr>
                <tr>
                    <td>Cameron</td>
                    <td>20202020-0101-1010</td>
                    <td>593-2054 Non Road</td>
                    <td>Piagge</td>
                </tr>
                <tr>
                    <td>Chaim</td>
                    <td>20202020-0505-0303</td>
                    <td>Ap #375-7959 Ullamcorper St.</td>
                    <td>Belsele</td>
                </tr>
                <tr>
                    <td>Rogan</td>
                    <td>20202020-0202-2323</td>
                    <td>Ap #144-7994 Ac Road</td>
                    <td>Portobuffolè</td>
                </tr>
                <tr>
                    <td>Dexter</td>
                    <td>18181818-1010-0101</td>
                    <td>P.O. Box 317, 9315 Blandit Rd.</td>
                    <td>Buckingham</td>
                </tr>
                <tr>
                    <td>Ryan</td>
                    <td>19191919-0404-2121</td>
                    <td>564-7861 Mauris Road</td>
                    <td>Crewe</td>
                </tr>
                <tr>
                    <td>Oleg</td>
                    <td>18181818-0606-2121</td>
                    <td>8695 Nisi Ave</td>
                    <td>Oranienburg</td>
                </tr>
                <tr>
                    <td>Erasmus</td>
                    <td>18181818-0707-0505</td>
                    <td>840-1869 Quis Rd.</td>
                    <td>Malle</td>
                </tr>
                <tr>
                    <td>Zachery</td>
                    <td>19191919-0202-0101</td>
                    <td>762-6259 Aliquet Av.</td>
                    <td>Anzio</td>
                </tr>
                <tr>
                    <td>Ulysses</td>
                    <td>19191919-0909-2222</td>
                    <td>539-8218 Ut Ave</td>
                    <td>Kiel</td>
                </tr>
                <tr>
                    <td>Malachi</td>
                    <td>19191919-0707-1010</td>
                    <td>Ap #853-9475 Aliquam Rd.</td>
                    <td>Águas Lindas de Goiás</td>
                </tr>
                <tr>
                    <td>Noah</td>
                    <td>18181818-1212-0909</td>
                    <td>Ap #245-7833 Semper. Road</td>
                    <td>Saint John</td>
                </tr>
                <tr>
                    <td>Graiden</td>
                    <td>18181818-0808-0202</td>
                    <td>P.O. Box 828, 2218 Libero St.</td>
                    <td>Vieuxville</td>
                </tr>
                <tr>
                    <td>Noble</td>
                    <td>19191919-0909-0303</td>
                    <td>P.O. Box 386, 5128 Arcu. St.</td>
                    <td>Sunshine Coast Regional District</td>
                </tr>
                <tr>
                    <td>Micah</td>
                    <td>19191919-0909-1515</td>
                    <td>Ap #260-520 Integer Rd.</td>
                    <td>Gatineau</td>
                </tr>
                <tr>
                    <td>Guy</td>
                    <td>18181818-0909-1010</td>
                    <td>Ap #927-7728 Nec Av.</td>
                    <td>Cambrai</td>
                </tr>
                <tr>
                    <td>Barry</td>
                    <td>19191919-0505-1919</td>
                    <td>P.O. Box 990, 2990 At, Rd.</td>
                    <td>Berlare</td>
                </tr>
                <tr>
                    <td>Rafael</td>
                    <td>18181818-0909-2222</td>
                    <td>P.O. Box 131, 584 A Street</td>
                    <td>Haasdonk</td>
                </tr>
                <tr>
                    <td>Amal</td>
                    <td>19191919-0404-1212</td>
                    <td>847-7400 Tortor Rd.</td>
                    <td>Stamford</td>
                </tr>
                <tr>
                    <td>Cadman</td>
                    <td>18181818-0808-2121</td>
                    <td>9242 Ullamcorper, Rd.</td>
                    <td>Hubli</td>
                </tr>
                <tr>
                    <td>Benedict</td>
                    <td>20202020-0202-1919</td>
                    <td>570-9566 Integer Street</td>
                    <td>Hamilton</td>
                </tr>
                <tr>
                    <td>Ishmael</td>
                    <td>18181818-1111-2121</td>
                    <td>638-5639 Ridiculus Avenue</td>
                    <td>Mesa</td>
                </tr>
                <tr>
                    <td>Francis</td>
                    <td>19191919-0303-3131</td>
                    <td>383-2672 Pharetra. Rd.</td>
                    <td>Ávila</td>
                </tr>
                <tr>
                    <td>Colby</td>
                    <td>18181818-1010-2323</td>
                    <td>7053 Fusce St.</td>
                    <td>Redruth</td>
                </tr>
                <tr>
                    <td>Upton</td>
                    <td>20202020-0101-1313</td>
                    <td>696-8448 Consequat Rd.</td>
                    <td>Sobral</td>
                </tr>
                <tr>
                    <td>Malik</td>
                    <td>19191919-0202-1616</td>
                    <td>195-6607 Nec St.</td>
                    <td>Macklin</td>
                </tr>
                <tr>
                    <td>Cameron</td>
                    <td>19191919-1111-1313</td>
                    <td>P.O. Box 477, 5257 Dapibus St.</td>
                    <td>Saint John</td>
                </tr>
                <tr>
                    <td>Brandon</td>
                    <td>19191919-1111-2626</td>
                    <td>P.O. Box 973, 1845 Amet St.</td>
                    <td>Barrow-in-Furness</td>
                </tr>
                <tr>
                    <td>Lance</td>
                    <td>20202020-0404-0303</td>
                    <td>519-904 Non, Street</td>
                    <td>Rockhampton</td>
                </tr>
                <tr>
                    <td>Mannix</td>
                    <td>18181818-1212-1111</td>
                    <td>7993 Quam Ave</td>
                    <td>Voitsberg</td>
                </tr>
                <tr>
                    <td>Sean</td>
                    <td>18181818-0808-2020</td>
                    <td>8126 Pellentesque Rd.</td>
                    <td>Belcarra</td>
                </tr>
                <tr>
                    <td>Jerry</td>
                    <td>18181818-0606-2424</td>
                    <td>5991 Egestas Ave</td>
                    <td>Nanton</td>
                </tr>
                <tr>
                    <td>Kibo</td>
                    <td>19191919-0707-1313</td>
                    <td>Ap #880-8027 Magnis Ave</td>
                    <td>Sellia Marina</td>
                </tr>
                <tr>
                    <td>Todd</td>
                    <td>19191919-1212-0505</td>
                    <td>415-9357 Non Ave</td>
                    <td>Vihari</td>
                </tr>
                <tr>
                    <td>Micah</td>
                    <td>20202020-0505-1010</td>
                    <td>P.O. Box 114, 9486 Ad Ave</td>
                    <td>Sutton</td>
                </tr>
                <tr>
                    <td>Ivor</td>
                    <td>20202020-0303-2424</td>
                    <td>Ap #148-8536 Nascetur St.</td>
                    <td>Sunset Point</td>
                </tr>
                <tr>
                    <td>Griffin</td>
                    <td>19191919-0909-2828</td>
                    <td>P.O. Box 329, 1695 Nunc St.</td>
                    <td>Zaventem</td>
                </tr>
                <tr>
                    <td>Malcolm</td>
                    <td>19191919-1111-0404</td>
                    <td>P.O. Box 359, 540 Fermentum Rd.</td>
                    <td>Castelseprio</td>
                </tr>
                <tr>
                    <td>Nathaniel</td>
                    <td>19191919-1212-2020</td>
                    <td>6914 Dictum Ave</td>
                    <td>Huechuraba</td>
                </tr>
                <tr>
                    <td>Yuli</td>
                    <td>18181818-1010-1010</td>
                    <td>Ap #143-6284 Laoreet Ave</td>
                    <td>Civitacampomarano</td>
                </tr>
                <tr>
                    <td>Ivor</td>
                    <td>20202020-0505-0404</td>
                    <td>P.O. Box 248, 4446 Tempor St.</td>
                    <td>Rodì Milici</td>
                </tr>
                <tr>
                    <td>Yasir</td>
                    <td>18181818-0808-2020</td>
                    <td>7601 Volutpat. Av.</td>
                    <td>Pulle</td>
                </tr>
                <tr>
                    <td>Knox</td>
                    <td>20202020-0101-0101</td>
                    <td>P.O. Box 782, 3980 In Rd.</td>
                    <td>San Francisco</td>
                </tr>
                <tr>
                    <td>Ethan</td>
                    <td>20202020-0606-0303</td>
                    <td>P.O. Box 519, 7238 Mollis. Avenue</td>
                    <td>Sindelfingen</td>
                </tr>
                <tr>
                    <td>Walter</td>
                    <td>20202020-0404-1414</td>
                    <td>299-593 Malesuada Street</td>
                    <td>Port Harcourt</td>
                </tr>
                <tr>
                    <td>Stuart</td>
                    <td>20202020-0303-1717</td>
                    <td>769-3361 Adipiscing. Avenue</td>
                    <td>Monte Giberto</td>
                </tr>
                <tr>
                    <td>Scott</td>
                    <td>18181818-1010-1414</td>
                    <td>8470 Netus Avenue</td>
                    <td>Gooik</td>
                </tr>
                <tr>
                    <td>Jakeem</td>
                    <td>20202020-0505-2929</td>
                    <td>5855 Sagittis Road</td>
                    <td>Kenosha</td>
                </tr>
                <tr>
                    <td>Caldwell</td>
                    <td>19191919-0505-1515</td>
                    <td>797-638 Malesuada Rd.</td>
                    <td>Bathgate</td>
                </tr>
                <tr>
                    <td>Stewart</td>
                    <td>18181818-0707-0808</td>
                    <td>4400 Venenatis Rd.</td>
                    <td>Boston</td>
                </tr>
                <tr>
                    <td>Allistair</td>
                    <td>18181818-0707-2525</td>
                    <td>389-5409 Duis Av.</td>
                    <td>Sint-Ulriks-Kapelle</td>
                </tr>
                <tr>
                    <td>Macon</td>
                    <td>18181818-1111-0202</td>
                    <td>Ap #227-5836 Lacus. Rd.</td>
                    <td>Soverzene</td>
                </tr>
                <tr>
                    <td>Macon</td>
                    <td>20202020-0505-1010</td>
                    <td>Ap #924-1002 Ridiculus St.</td>
                    <td>Harrogate</td>
                </tr>
                <tr>
                    <td>Calvin</td>
                    <td>19191919-1111-1212</td>
                    <td>Ap #875-9811 Gravida Street</td>
                    <td>Ligny</td>
                </tr>
                <tr>
                    <td>Gray</td>
                    <td>20202020-0505-2424</td>
                    <td>498-255 Velit. Street</td>
                    <td>Lang</td>
                </tr>
                <tr>
                    <td>Beau</td>
                    <td>18181818-0808-0404</td>
                    <td>273-6909 In Ave</td>
                    <td>Le Cannet</td>
                </tr>
                <tr>
                    <td>Hilel</td>
                    <td>19191919-0909-3030</td>
                    <td>113-6620 Nunc Road</td>
                    <td>Clovenfords</td>
                </tr>
                <tr>
                    <td>Quinlan</td>
                    <td>19191919-1010-1414</td>
                    <td>5061 Luctus Av.</td>
                    <td>Morhet</td>
                </tr>
                <tr>
                    <td>Lionel</td>
                    <td>19191919-0202-0808</td>
                    <td>5380 Ante Road</td>
                    <td>Springfield</td>
                </tr>
                <tr>
                    <td>Cairo</td>
                    <td>19191919-0404-2929</td>
                    <td>181-3212 Lacinia Road</td>
                    <td>Toledo</td>
                </tr>
                <tr>
                    <td>Galvin</td>
                    <td>19191919-0303-0909</td>
                    <td>374-6269 Morbi Avenue</td>
                    <td>Samsun</td>
                </tr>
                <tr>
                    <td>Clarke</td>
                    <td>19191919-0202-2828</td>
                    <td>2180 Nulla St.</td>
                    <td>Tocopilla</td>
                </tr>
                <tr>
                    <td>Marsden</td>
                    <td>19191919-1010-0606</td>
                    <td>P.O. Box 377, 1888 Et, St.</td>
                    <td>Gurgaon</td>
                </tr>
                <tr>
                    <td>Lionel</td>
                    <td>19191919-0909-1111</td>
                    <td>Ap #745-1375 Sem St.</td>
                    <td>Loughborough</td>
                </tr>
                <tr>
                    <td>Dane</td>
                    <td>19191919-0909-3030</td>
                    <td>6771 In Road</td>
                    <td>Gatineau</td>
                </tr>
                <tr>
                    <td>Xanthus</td>
                    <td>19191919-0606-1212</td>
                    <td>P.O. Box 705, 6574 Natoque St.</td>
                    <td>Sant'Urbano</td>
                </tr>
                <tr>
                    <td>Mufutau</td>
                    <td>19191919-0606-0909</td>
                    <td>P.O. Box 381, 6334 Donec Ave</td>
                    <td>HŽron</td>
                </tr>
                <tr>
                    <td>Oleg</td>
                    <td>18181818-0707-2929</td>
                    <td>P.O. Box 635, 4035 Mauris Av.</td>
                    <td>Grey County</td>
                </tr>
                <tr>
                    <td>Colt</td>
                    <td>19191919-0303-1212</td>
                    <td>P.O. Box 274, 3268 Aliquam Ave</td>
                    <td>Valley East</td>
                </tr>
                <tr>
                    <td>Valentine</td>
                    <td>19191919-0606-0707</td>
                    <td>Ap #999-3100 Leo. Rd.</td>
                    <td>Los Angeles</td>
                </tr>
                <tr>
                    <td>Brett</td>
                    <td>18181818-0606-2323</td>
                    <td>6312 Purus. Avenue</td>
                    <td>Dumbarton</td>
                </tr>
                <tr>
                    <td>Troy</td>
                    <td>19191919-0101-0808</td>
                    <td>4496 Ipsum Av.</td>
                    <td>Gurgaon</td>
                </tr>
                <tr>
                    <td>Raphael</td>
                    <td>18181818-0707-1010</td>
                    <td>369-4853 Nulla. Avenue</td>
                    <td>Ham-sur-Heure-Nalinnes</td>
                </tr>
                <tr>
                    <td>Matthew</td>
                    <td>19191919-0101-3131</td>
                    <td>Ap #349-695 Sodales Avenue</td>
                    <td>Lanester</td>
                </tr>
                <tr>
                    <td>Alec</td>
                    <td>19191919-0505-2323</td>
                    <td>Ap #948-460 Sagittis Street</td>
                    <td>Winchester</td>
                </tr>
                <tr>
                    <td>Elvis</td>
                    <td>19191919-1010-2323</td>
                    <td>892-2530 Pharetra St.</td>
                    <td>Nanded</td>
                </tr>
                <tr>
                    <td>Josiah</td>
                    <td>19191919-0303-0707</td>
                    <td>4744 Lorem. Ave</td>
                    <td>Caldera</td>
                </tr>
                <tr>
                    <td>Nigel</td>
                    <td>20202020-0303-1010</td>
                    <td>725 Feugiat St.</td>
                    <td>Baranello</td>
                </tr>
                <tr>
                    <td>Hall</td>
                    <td>19191919-0404-0707</td>
                    <td>Ap #446-1176 Non, Avenue</td>
                    <td>Hofstade</td>
                </tr>
                <tr>
                    <td>Declan</td>
                    <td>18181818-1212-0606</td>
                    <td>330-1145 Eros Rd.</td>
                    <td>Hénin-Beaumont</td>
                </tr>
                <tr>
                    <td>Clark</td>
                    <td>19191919-1212-2020</td>
                    <td>4454 Metus. Rd.</td>
                    <td>Duluth</td>
                </tr>
                <tr>
                    <td>Cruz</td>
                    <td>18181818-1010-1414</td>
                    <td>4761 Ac, Av.</td>
                    <td>Vezirköprü</td>
                </tr>
                <tr>
                    <td>Edward</td>
                    <td>19191919-0202-1616</td>
                    <td>P.O. Box 238, 339 At St.</td>
                    <td>Abeokuta</td>
                </tr>
                <tr>
                    <td>Abraham</td>
                    <td>18181818-0909-0707</td>
                    <td>6548 Phasellus St.</td>
                    <td>Kitzbühel</td>
                </tr>
                <tr>
                    <td>Leo</td>
                    <td>19191919-0707-1212</td>
                    <td>107-2117 Integer Rd.</td>
                    <td>Värnamo</td>
                </tr>
                <tr>
                    <td>Vladimir</td>
                    <td>18181818-0808-0505</td>
                    <td>Ap #108-3994 Sed Road</td>
                    <td>Brisbane</td>
                </tr>
                <tr>
                    <td>Preston</td>
                    <td>20202020-0404-1616</td>
                    <td>P.O. Box 630, 1828 Ante. Ave</td>
                    <td>Hoshiarpur</td>
                </tr>
                <tr>
                    <td>Quinlan</td>
                    <td>18181818-0808-1313</td>
                    <td>533-8680 Pellentesque Av.</td>
                    <td>Covington</td>
                </tr>
                <tr>
                    <td>Giacomo</td>
                    <td>20202020-0202-0909</td>
                    <td>8052 Amet Rd.</td>
                    <td>Murwara</td>
                </tr>
                <tr>
                    <td>Davis</td>
                    <td>18181818-0909-0606</td>
                    <td>Ap #382-3370 Non, Av.</td>
                    <td>Nuneaton</td>
                </tr>
                <tr>
                    <td>Caldwell</td>
                    <td>19191919-0101-3030</td>
                    <td>6544 Lacus. Rd.</td>
                    <td>Presteigne</td>
                </tr>
                <tr>
                    <td>Xavier</td>
                    <td>19191919-0606-2929</td>
                    <td>Ap #889-9902 Bibendum Avenue</td>
                    <td>Diepenbeek</td>
                </tr>
                <tr>
                    <td>Dustin</td>
                    <td>20202020-0101-2727</td>
                    <td>9854 Elit St.</td>
                    <td>Rouvreux</td>
                </tr>
                <tr>
                    <td>Lee</td>
                    <td>19191919-1111-0606</td>
                    <td>P.O. Box 785, 2668 Enim St.</td>
                    <td>Vespolate</td>
                </tr>
                <tr>
                    <td>Kuame</td>
                    <td>19191919-0202-1414</td>
                    <td>Ap #336-2107 Nisl. Road</td>
                    <td>Cicagna</td>
                </tr>
                <tr>
                    <td>Cullen</td>
                    <td>19191919-0303-2222</td>
                    <td>8948 Adipiscing Ave</td>
                    <td>Flint</td>
                </tr>
                <tr>
                    <td>Yasir</td>
                    <td>18181818-1111-2828</td>
                    <td>785-8991 Phasellus Ave</td>
                    <td>North Dum Dum</td>
                </tr>
                <tr data-test-id="lastTableRow" className="lastTableRow">
                    <td>Cooper</td>
                    <td>18181818-0909-1515</td>
                    <td>4499 Odio, St.</td>
                    <td>Vorst</td>
                </tr>
            </Table>
        );
    }
}