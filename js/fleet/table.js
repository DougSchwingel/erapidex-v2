function gerarLinhaVeiculo(veiculo) {
    return `<tr>
                <td class="table-info"><a class="table-link-text" href="/pages/vehicle.html">${veiculo[0]}</a></td>
                <td class="table-info">${veiculo[1]}</td>
                <td class="table-info">${veiculo[2]}</td>
                <td class="table-info">${veiculo[3]}</td>
                <td class="table-info">${veiculo[4]}</td>
                <td class="table-info">${veiculo[5]}</td>
                <td class="table-info">${veiculo[6]}</td>
                <td class="table-info">${veiculo[7]}</td>
            </tr>`;
}

const tabelaVeiculos = document.getElementById('tabela-veiculos');

const dadosVeiculos = [
    ['ZXE-1J85','DAF','CF',2018,'Jordan Medgewick','0AD485OE02A561576','DESCARREGADO','-8.2182795,112.2950314'],['VZT-7V57','VOLVO','FH500',2019,'Whitby Raiston','0AK046SI78O846623','DESCARREGADO','23.9563274,113.1916737'],,['IWP-5G98','DAF','CF',2020,'Annmaria Hewson','0AU964NJ38Z159443','CARREGADO','50.5372538,23.5454126'],,['PJN-8891','VOLVO','FH540',2016,'Craggie Stappard','0BB013NZ08D352745','CARREGADO','-8.9837384,125.2203419'],,['FPX-8O95','SCANIA','XT',2019,'Charil Espy','0BE693JB87N296757','CARREGADO','-12.1339194,-38.4211655'],,['ALS-7F46','DAF','XF',2021,'Elston Slatcher','0BF236AS59X054295','CARREGADO','22.974898,113.993115'],,['ERU-1X28','DAF','XF',2019,'Ashby Goodrum','0BI478RC34F901910','CARREGADO','37.417116,121.241089'],,['SEF-8L60','VOLVO','FH540',2019,'Genni Hankard','0BP130CP45S255554','CARREGADO','35.8904199,8.5528746'],,['ZLJ-9L74','VOLVO','FH500',2020,'Melisse Maypole','0BT559TP14G629699','CARREGADO','43.4945737,5.8978018'],,['VBS-1T23','VOLVO','FH540',2017,'Ricoriki Vivers','0BX076HI44Q963573','CARREGADO','6.9827437,-5.7405139'],,['HCQ-2K93','MERCEDES','ACCELO',2022,'Sayers Alessandrucci','0CD187FL47D136589','DESCARREGADO','36.7067342,57.4146531'],,['FBK-6W63','SCANIA','V8',2016,'Robenia Mennell','0CF423KG85A069589','CARREGADO','42.038041,-8.324549'],,['UGX-7A72','VOLVO','FH500',2018,'Catha Struan','0CH395LT84T168709','DESCARREGADO','50.6429329,13.9944445'],,['WEJ-7K77','SCANIA','V8',2022,'Adaline Haselhurst','0CO583TZ18F320374','DESCARREGADO','55.813247,37.478747'],,['SGH-1164','VOLVO','FH540',2021,'Clarke McKee','0CS083SN45X242206','CARREGADO','-8.4355645,115.3223438'],,['MUS-4Y23','MERCEDES','AXOR',2014,'Nanon McAvaddy','0CV114PK47E213353','CARREGADO','13.6095632,123.5359174'],,['DXH-3B29','VOLVO','FH540',2018,'Auguste Gocher','0CZ677DQ23D798500','DESCARREGADO','28.108088,114.457886'],,['DXM-6W24','MERCEDES','ACCELO',2022,'Kirbie Davet','0DN716GJ14P642249','CARREGADO','-21.9221397,-50.7317774'],,['WEQ-1H94','VOLVO','FH540',2019,'Tiff Shevell','0DX576FT51T463940','CARREGADO','59.834171,30.5188521'],,['XDF-5N69','MERCEDES','ACCELO',2020,'Mireille Dennehy','0DY200AB08A021978','CARREGADO','31.9453666,35.9283716'],,['SYB-2V99','VOLVO','FH540',2019,'Jason Bachellier','0DZ161LG84B494714','CARREGADO','-7.811056,108.438797'],,['KUK-7X80','VOLVO','FH500',2014,'Gottfried Fey','0EE532DR59A702501','CARREGADO','56.3181237,36.5573127'],,['KOR-9K03','VOLVO','FH540',2019,'Corri Tegeller','0EJ557KH53R569655','CARREGADO','30.5604564,31.0079484'],,['COO-8R92','DAF','XF',2022,'Nellie Causey','0EU369AT95K840542','CARREGADO','51.3605659,99.3468919'],,['ASG-1A97','VOLVO','FH540',2023,'Noah Drohane','0EW054CE61U571574','DESCARREGADO','40.6816244,-8.6291241'],,['KMP-3Q98','MERCEDES','AXOR',2022,'Quillan Hundey','0FQ876WM52Q013281','CARREGADO','-9.833333,120.216667'],,['OUF-3K57','MERCEDES','AXOR',2014,'Priscilla Coldrick','0GQ420LB34K303830','CARREGADO','14.582807,121.061708'],,['PKU-1635','SCANIA','XT',2023,'Ethelyn Remington','0HE451SV62D283589','CARREGADO','31.741456,118.328116'],,['XZG-5O60','VOLVO','FH500',2022,'Tressa Spurden','0HQ784UQ37V686327','CARREGADO','13.6579053,102.5809026'],,['CTU-4T12','MERCEDES','AXOR',2016,'Sherwynd Cadwallader','0HT048DN43O668740','CARREGADO','9.9141597,-75.4111644'],,['KLM-1608','DAF','XF',2014,'Tawsha Loude','0HV375AN00G885833','DESCARREGADO','-6.3965,105.9693'],,['PIP-1O96','VOLVO','FH540',2019,'Alonzo Falks','0IO482PM36F280455','CARREGADO','51.756353,14.7142269'],,['ZAX-0436','VOLVO','FH540',2014,'Mandie Overshott','0IU443QB48O116861','DESCARREGADO','55.5807611,37.7673912'],,['LJM-7V76','MERCEDES','AXOR',2014,'Nikaniki Hindenberger','0IZ793ND17J129863','DESCARREGADO','9.939624,126.065213'],,['ULZ-8O23','SCANIA','XT',2017,'Tobey Hazelby','0JS369RL06B873642','CARREGADO','36.46667,81.96667'],,['FOV-8E87','DAF','CF',2017,'Randolf Retchford','0JW168PS35K021920','DESCARREGADO','36.4651868,37.0936867'],,['EIR-8H74','MERCEDES','ACCELO',2023,'Antone De Launde','0KD231CJ85V656193','CARREGADO','1.019089,35.0023048'],,['THG-1S92','SCANIA','V8',2019,'Cece Confait','0KN142WT00M785791','DESCARREGADO','19.2818854,-98.4410429'],,['JSS-2F96','MERCEDES','ACCELO',2021,'Nancie Beeze','0LA601YG75X319671','CARREGADO','15.3362649,-88.5529063'],,['YKR-9Q91','DAF','CF',2019,'Cymbre Tennick','0LA973PT70N413233','CARREGADO','10.097212,-83.504629'],,['ZIS-2591','SCANIA','V8',2016,'Mei Rooper','0LE181AE91Q281793','CARREGADO','-7.3463033,108.2807559'],,['QEU-4P32','MERCEDES','ACCELO',2023,'Neel Alldridge','0LI584AV01U444418','DESCARREGADO','52.7680084,41.2841466'],,['LRV-1T82','DAF','XF',2014,'Peirce Storie','0MA059TD80K183224','CARREGADO','-34.5617581,-58.6778015'],,['UQK-9H67','SCANIA','V8',2014,'Marsiella Jaxon','0ME282LQ65K317245','CARREGADO','55.6777952,12.5751597'],,['QFS-5L13','SCANIA','V8',2022,'Sebastien Gebhard','0MH524CS46Y047895','DESCARREGADO','23.12468,113.3612'],,['RGF-6M13','MERCEDES','AXOR',2019,'Savina Stihl','0MJ471WU85Z194603','CARREGADO','45.7718709,126.6701902'],,['KLM-6731','MERCEDES','ACCELO',2016,'Alisun Thorn','0MM976BD50K235350','DESCARREGADO','62.4150445,17.2885932'],,['XMB-3F37','VOLVO','FH500',2016,'Remington Stutter','0MV059QK73O849575','CARREGADO','-19.3088778,-64.3031372'],,['PKF-0325','SCANIA','XT',2020,'Warren Haldin','0ND714BA73G768297','CARREGADO','59.7457795,29.623955'],,['EMG-2547','MERCEDES','AXOR',2015,'Ophelie Spicer','0OV639QP24M016914','CARREGADO','40.6536074,22.9223719'],,['QXI-5P88','VOLVO','FH540',2021,'Pearle Bower','0OW268RO98F370980','CARREGADO','39.2699174,-9.1052924'],,['GTX-4F20','SCANIA','XT',2021,'Claiborn Andrelli','0OX712WM33T932592','CARREGADO','-7.1194958,-34.8450118'],,['FGC-9X18','DAF','XF',2023,'Anallise Damato','0PM523TB36W120584','CARREGADO','13.7527691,123.8623691'],,['DFN-1V69','DAF','XF',2023,'Addie Feechum','0QN600GO87Z070945','DESCARREGADO','16.7095,33.3565'],,['FIB-0H94','VOLVO','FH540',2015,'Jim Toretta','0QS767KH96I974029','DESCARREGADO','31.689906,114.503413'],,['KYA-5P79','DAF','CF',2017,'Filmer Voyce','0QX163CB15K903234','CARREGADO','-2.8852569,104.687936'],,['FST-5463','MERCEDES','ACCELO',2020,'Eyde Curnow','0RD804GR75E958463','CARREGADO','46.3176956,48.0025271'],,['LJQ-0Q48','SCANIA','XT',2014,'Georgi Dearnley','0RF170RM99Z237399','CARREGADO','7.1402468,40.7107871'],,['JLZ-7M35','DAF','XF',2023,'Akim Snoddon','0RP849WT97W091901','CARREGADO','16.9075213,96.5623251'],,['PYG-2R69','DAF','XF',2018,'Tades Champe','0SI795BX43E786934','DESCARREGADO','-0.931556,-78.60585'],,['QDW-4P29','SCANIA','XT',2022,'Modesty Campion','0SJ395GC90U007272','CARREGADO','-8.6931631,-67.952363'],,['LRG-1H71','VOLVO','FH540',2015,'Putnam Mardling','0SM404UG21W254300','CARREGADO','38.5194,-9.0138'],,['QUA-4C07','SCANIA','V8',2019,'Sterling Heaphy','0SQ519PQ54Q627992','DESCARREGADO','-8.1058258,156.8349986'],,['BJJ-3604','SCANIA','XT',2014,'Phillipp Maddocks','0SY582OZ33Q959025','DESCARREGADO','-8.3782936,123.2658133'],,['ASK-0F07','SCANIA','XT',2018,'Meagan McTerry','0TE099ZZ65B734307','CARREGADO','34.976557,112.090859'],,['WZE-8G04','VOLVO','FH500',2023,'Efren Cowl','0TH861VN02D506196','CARREGADO','5.1443561,10.5239867'],,['WZH-9O82','DAF','CF',2019,'Arielle Dwane','0TL741FQ48Q156596','DESCARREGADO','10.7244426,-68.5485631'],,['RXL-0L76','MERCEDES','ACCELO',2016,'Eryn Prichard','0TX251TO41W174367','CARREGADO','41.3009465,-8.1528902'],,['JFM-0N78','MERCEDES','AXOR',2016,'Veriee Nolan','0TZ428LX20Z750297','DESCARREGADO','-7.5231833,-77.9710098'],,['VUW-0U06','VOLVO','FH540',2020,'Verena Grigore','0UD173ZS57H564711','CARREGADO','-17.6059721,-149.3023702'],,['PTX-4P61','DAF','CF',2019,'Krisha Mellenby','0UH187AZ37L948494','DESCARREGADO','16.0954654,99.8348146'],,['IJM-7233','VOLVO','FH540',2018,'Alvina Chavrin','0UI474BJ91D477411','CARREGADO','32.890479,115.814504'],,['YII-1641','SCANIA','V8',2021,'Rudy Haymes','0UT410KE53B109460','DESCARREGADO','40.72135,-75.393181'],,['LWH-7873','MERCEDES','AXOR',2022,'Anjanette Filippyev','0UU187JF60H966632','DESCARREGADO','-6.9704825,111.4350413'],,['ZPY-8562','SCANIA','XT',2019,'Karrah Fruish','0VD011TW74X020619','DESCARREGADO','7.945451,4.7872834'],,['YQV-5F86','VOLVO','FH540',2015,'Winona Sutter','0VQ164VH80T692619','DESCARREGADO','-3.3343297,102.4552546'],,['XSW-2218','VOLVO','FH500',2015,'Evelyn Howsden','0WP773DD19Q928895','CARREGADO','36.02866,70.77258'],,['XNT-7V60','SCANIA','XT',2023,'Kellen Allcoat','0WR991ZR35O438769','CARREGADO','-26.73333,-60.61667'],,['AOV-6097','SCANIA','V8',2017,'Shannon Dawney','0WZ435JB90C825658','CARREGADO','35.490701,112.851831'],,['HYL-6Q11','SCANIA','XT',2022,'Archie Staten','0XB181NU32M426230','DESCARREGADO','-8.1669161,112.5991372'],,['KGL-6F64','DAF','CF',2018,'Thomasina Summerbell','0XC369QY28J337887','CARREGADO','52.3346733,19.2782681'],,['UUA-4C89','SCANIA','XT',2018,'Sandie Crellim','0XN803CZ80J643285','CARREGADO','57.061272,25.817596'],,['QWA-8630','DAF','XF',2017,'Leon Berthelmot','0XQ321FS68B974647','DESCARREGADO','50.4225,104.1075'],,['KPI-2U81','DAF','XF',2014,'Kristine Krauze','0XY056OP73V113664','DESCARREGADO','-2.9679629,29.2088303'],,['JAL-1T36','VOLVO','FH540',2022,'Fabe Cholerton','0YF422VV23P954409','DESCARREGADO','39.5955323,-7.5303251'],,['SFK-5971','DAF','XF',2023,'Orson Alvis','0YI869AV07W285433','CARREGADO','-9.8076,123.9023'],,['CSS-4L54','VOLVO','FH500',2019,'Grayce Blakebrough','0YQ275NT73A517335','DESCARREGADO','57.8675746,39.5333394'],,['QXB-5695','MERCEDES','AXOR',2020,'Corey Dinnies','0ZO240HX40E261524','DESCARREGADO','41.56055,61.0018'],,['TZG-2G73','VOLVO','FH500',2019,'Neall Hallitt','0ZQ574FF41N483867','CARREGADO','44.982137,38.9254064'],,['AFW-3U57','SCANIA','XT',2017,'Auria MattiCCI','0ZR210XW37K545041','CARREGADO','9.90299,-84.102054'],,['JWC-0I00','VOLVO','FH540',2018,'Anny Eatherton','0ZT413ZF26P716756','CARREGADO','22.060541,112.837815'],,['FPY-1Q25','DAF','XF',2019,'Barbee Reinger','0ZW395OL64T189223','CARREGADO','49.8788895,6.1878416'],,['GJS-2H79','MERCEDES','AXOR',2017,'Karola Orae','0ZY529LX92O808967','DESCARREGADO','29.83622,91.64777'],,['NNJ-4659','SCANIA','V8',2016,'Shirline Mobbs','1AB038MH72X750421','CARREGADO','7.6395498,4.7588042'],,['RXL-3383','DAF','CF',2015,'Brockie Bartrap','1AF161CF84W161968','CARREGADO','52.1379258,21.828508'],,['ZDJ-7K26','VOLVO','FH540',2020,'Kimball Cosby','1AG323PR93Z034352','CARREGADO','32.142922,108.460743'],,['VIY-5148','SCANIA','XT',2017,'Christalle Cooke','1AI004FG91D441676','CARREGADO','-7.0303222,108.6368609'],,['DSF-2N71','SCANIA','V8',2021,'Chelsy Rainsden','1AV586LB89X670700','CARREGADO','-23.0888263,-46.5451516'],,['OUM-2O86','SCANIA','V8',2021,'Cos Stinson','1AZ078IQ84G977564','CARREGADO','49.7294521,19.1018274'],,['ORW-9184','DAF','CF',2018,'Gard Nouch','1BA814NS03J118080','CARREGADO','33.7257889,36.104236'],,['TXN-0Z64','MERCEDES','AXOR',2014,'Berkly Dykas','1BK898GA25L393181','CARREGADO','51.444601,-0.1549619'],,['OOB-7O77','SCANIA','XT',2019,'Zacharias Tebbe','1BP579BV98D401140','CARREGADO','56.5930499,25.2431539'],,['OKT-4E80','SCANIA','XT',2015,'Leila Pettecrew','1BS354EQ20A669295','CARREGADO','-9.6923735,120.3322404'],,['DLB-6B23','MERCEDES','AXOR',2023,'Laurene Law','1BT369OR86R187093','CARREGADO','-10.02569,123.729698'],,['SBL-3W38','SCANIA','V8',2018,'Pegeen Chater','1BU024QJ84D008415','CARREGADO','30.97213,119.310773'],,['ONN-3450','SCANIA','XT',2018,'Kirstyn De Caroli','1CI935MB26K931599','CARREGADO','32.101031,114.125656'],,['GKH-9P20','DAF','XF',2022,'Rozalie Codlin','1CP117DD03X999630','CARREGADO','10.9556419,-72.795543'],,['OPQ-8P32','DAF','CF',2023,'Kacy Clutten','1CU739ZN66V552962','DESCARREGADO','-12.1450486,96.8217017'],,['GLW-6961','MERCEDES','AXOR',2015,'Noelle Engledow','1DA484ZM91D871123','CARREGADO','18.1096868,-95.8803869'],,['RQK-8G97','SCANIA','V8',2019,'Charlot Giggs','1DJ162GH51Y658751','CARREGADO','-10.5440373,-37.5960704'],,['IAF-8873','SCANIA','XT',2020,'Angelica Tyrrell','1DN305DW10Q556499','DESCARREGADO','47.3559798,123.9215076'],,['QPF-9T11','VOLVO','FH540',2022,'Mord Dakin','1DR458BY37T818226','CARREGADO','41.0353649,-8.5562534'],,['VKS-9K32','SCANIA','V8',2020,'Lora Minshall','1ED693JR60C535818','CARREGADO','25.0605919,118.522341'],,['TEG-0W00','DAF','CF',2021,'Desdemona Paye','1EH362ES28C899210','DESCARREGADO','28.074649,119.141473'],,['NUC-4Z80','DAF','CF',2015,'Nanci Rogan','1EP116OS06X391571','CARREGADO','41.821778,124.048453'],,['IGG-8C02','VOLVO','FH500',2019,'Jennine Hamby','1EV091DK73S415461','DESCARREGADO','-6.8622047,111.6051176'],,['UZC-8C53','SCANIA','V8',2023,'Bennie Wardington','1EV413PQ88W465370','DESCARREGADO','51.4063964,-2.6467239'],,['AUQ-0C41','VOLVO','FH540',2022,'Cecilla Medlen','1EX630VU40S731543','CARREGADO','13.5009779,7.1036396'],,['UFK-9P43','VOLVO','FH540',2016,'Frasier Roney','1EZ310EB79R619202','CARREGADO','-4.3325997,-38.8773164'],,['WOC-3J37','SCANIA','XT',2019,'Torey Paten','1FV258HF85F941138','CARREGADO','38.12723,23.78729'],,['THL-2X33','MERCEDES','AXOR',2017,'Tucky Frude','1FZ115SC87Z993384','CARREGADO','39.2097706,54.594037'],,['KWH-9V48','MERCEDES','ACCELO',2022,'Carrie Meak','1HI676AN11I201588','CARREGADO','33.8640647,-118.1766294'],,['AUS-8A68','VOLVO','FH500',2019,'Stu Spatig','1HP265DY20R037213','DESCARREGADO','41.1266172,23.3819761'],,['RTD-0F67','MERCEDES','ACCELO',2019,'Corry Mellows','1IH171KZ11H493564','DESCARREGADO','49.8788895,6.1878416'],,['JMT-6526','DAF','CF',2014,'Hart Artindale','1IV865FB29E665686','DESCARREGADO','-3.4627078,102.5318032'],,['DHV-0M53','DAF','CF',2020,'Emery Jaquet','1JL113PN85F500571','CARREGADO','-8.3837341,114.8982871'],,['VEH-2F47','MERCEDES','AXOR',2022,'Lindy Messager','1JL935XF25D421601','CARREGADO','32.2392184,-93.5205641'],,['SML-0367','MERCEDES','ACCELO',2023,'Ebonee Dowey','1JP658HX78Z601003','DESCARREGADO','1.3573565,103.8832261'],
];

dadosVeiculos.forEach(veiculo => {
    const linha = gerarLinhaVeiculo(veiculo);
    tabelaVeiculos.innerHTML += linha;
});