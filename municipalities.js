const municipalities = [
  {
    code: "1301",
    name: "Aberdeen Twp.",
    county: "Monmouth",
  },
  {
    code: "0101",
    name: "Absecon City",
    county: "Atlantic",
  },
  {
    code: "1001",
    name: "Alexandria Twp.",
    county: "Hunterdon",
  },
  {
    code: "2101",
    name: "Allamuchy Twp.",
    county: "Warren",
  },
  {
    code: "0201",
    name: "Allendale Bor.",
    county: "Bergen",
  },
  {
    code: "1302",
    name: "Allenhurst Bor.",
    county: "Monmouth",
  },
  {
    code: "1303",
    name: "Allentown Bor.",
    county: "Monmouth",
  },
  {
    code: "1701",
    name: "Alloway Twp.",
    county: "Salem",
  },
  {
    code: "2102",
    name: "Alpha Bor.",
    county: "Warren",
  },
  {
    code: "0202",
    name: "Alpine Bor.",
    county: "Bergen",
  },
  {
    code: "1901",
    name: "Andover Bor.",
    county: "Sussex",
  },
  {
    code: "1902",
    name: "Andover Twp.",
    county: "Sussex",
  },
  {
    code: "1304",
    name: "Asbury Park City",
    county: "Monmouth",
  },
  {
    code: "0102",
    name: "Atlantic City",
    county: "Atlantic",
  },
  {
    code: "1305",
    name: "Atlantic Highlands Bor.",
    county: "Monmouth",
  },
  {
    code: "0401",
    name: "Audubon Bor.",
    county: "Camden",
  },
  {
    code: "0402",
    name: "Audubon Park Bor.",
    county: "Camden",
  },
  {
    code: "0501",
    name: "Avalon Bor.",
    county: "Cape May",
  },
  {
    code: "1306",
    name: "Avon-by-the-Sea Bor.",
    county: "Monmouth",
  },
  {
    code: "1502",
    name: "Barnegat Light Bor.",
    county: "Ocean",
  },
  {
    code: "1501",
    name: "Barnegat Twp.",
    county: "Ocean",
  },
  {
    code: "0403",
    name: "Barrington Bor.",
    county: "Camden",
  },
  {
    code: "0301",
    name: "Bass River Twp.",
    county: "Burlington",
  },
  {
    code: "1503",
    name: "Bay Head Bor.",
    county: "Ocean",
  },
  {
    code: "0901",
    name: "Bayonne City",
    county: "Hudson",
  },
  {
    code: "1504",
    name: "Beach Haven Bor.",
    county: "Ocean",
  },
  {
    code: "1505",
    name: "Beachwood Bor.",
    county: "Ocean",
  },
  {
    code: "1801",
    name: "Bedminster Twp.",
    county: "Somerset",
  },
  {
    code: "0701",
    name: "Belleville Twp.",
    county: "Essex",
  },
  {
    code: "0404",
    name: "Bellmawr Bor.",
    county: "Camden",
  },
  {
    code: "1307",
    name: "Belmar Bor.",
    county: "Monmouth",
  },
  {
    code: "2103",
    name: "Belvidere Town",
    county: "Warren",
  },
  {
    code: "0203",
    name: "Bergenfield Bor.",
    county: "Bergen",
  },
  {
    code: "2001",
    name: "Berkeley Heights Twp.",
    county: "Union",
  },
  {
    code: "1506",
    name: "Berkeley Twp.",
    county: "Ocean",
  },
  {
    code: "0405",
    name: "Berlin Bor.",
    county: "Camden",
  },
  {
    code: "0406",
    name: "Berlin Twp.",
    county: "Camden",
  },
  {
    code: "1802",
    name: "Bernards Twp.",
    county: "Somerset",
  },
  {
    code: "1803",
    name: "Bernardsville Bor.",
    county: "Somerset",
  },
  {
    code: "1002",
    name: "Bethlehem Twp.",
    county: "Hunterdon",
  },
  {
    code: "0302",
    name: "Beverly City",
    county: "Burlington",
  },
  {
    code: "2104",
    name: "Blairstown Twp.",
    county: "Warren",
  },
  {
    code: "0702",
    name: "Bloomfield Twp.",
    county: "Essex",
  },
  {
    code: "1601",
    name: "Bloomingdale Bor.",
    county: "Passaic",
  },
  {
    code: "1003",
    name: "Bloomsbury Bor.",
    county: "Hunterdon",
  },
  {
    code: "0204",
    name: "Bogota Bor.",
    county: "Bergen",
  },
  {
    code: "1401",
    name: "Boonton Town",
    county: "Morris",
  },
  {
    code: "1402",
    name: "Boonton Twp.",
    county: "Morris",
  },
  {
    code: "0303",
    name: "Bordentown City",
    county: "Burlington",
  },
  {
    code: "0304",
    name: "Bordentown Twp.",
    county: "Burlington",
  },
  {
    code: "1804",
    name: "Bound Brook Bor.",
    county: "Somerset",
  },
  {
    code: "1308",
    name: "Bradley Beach Bor.",
    county: "Monmouth",
  },
  {
    code: "1805",
    name: "Branchburg Twp.",
    county: "Somerset",
  },
  {
    code: "1903",
    name: "Branchville Bor.",
    county: "Sussex",
  },
  {
    code: "1507",
    name: "Brick Twp.",
    county: "Ocean",
  },
  {
    code: "0601",
    name: "Bridgeton City",
    county: "Cumberland",
  },
  {
    code: "1806",
    name: "Bridgewater Twp.",
    county: "Somerset",
  },
  {
    code: "1309",
    name: "Brielle Bor.",
    county: "Monmouth",
  },
  {
    code: "0103",
    name: "Brigantine City",
    county: "Atlantic",
  },
  {
    code: "0407",
    name: "Brooklawn Bor.",
    county: "Camden",
  },
  {
    code: "0104",
    name: "Buena Bor.",
    county: "Atlantic",
  },
  {
    code: "0105",
    name: "Buena Vista Twp.",
    county: "Atlantic",
  },
  {
    code: "0305",
    name: "Burlington City",
    county: "Burlington",
  },
  {
    code: "0306",
    name: "Burlington Twp.",
    county: "Burlington",
  },
  {
    code: "1403",
    name: "Butler Bor.",
    county: "Morris",
  },
  {
    code: "1904",
    name: "Byram Twp.",
    county: "Sussex",
  },
  {
    code: "0703",
    name: "Caldwell Bor. Twp.",
    county: "Essex",
  },
  {
    code: "1004",
    name: "Califon Bor.",
    county: "Hunterdon",
  },
  {
    code: "0408",
    name: "Camden City",
    county: "Camden",
  },
  {
    code: "0502",
    name: "Cape May City",
    county: "Cape May",
  },
  {
    code: "0503",
    name: "Cape May Point Bor.",
    county: "Cape May",
  },
  {
    code: "0205",
    name: "Carlstadt Bor.",
    county: "Bergen",
  },
  {
    code: "1702",
    name: "Carneys Point Twp.",
    county: "Salem",
  },
  {
    code: "1201",
    name: "Carteret Bor.",
    county: "Middlesex",
  },
  {
    code: "0704",
    name: "Cedar Grove Twp.",
    county: "Essex",
  },
  {
    code: "1404",
    name: "Chatham Bor.",
    county: "Morris",
  },
  {
    code: "1405",
    name: "Chatham Twp.",
    county: "Morris",
  },
  {
    code: "0409",
    name: "Cherry Hill Twp.",
    county: "Camden",
  },
  {
    code: "0410",
    name: "Chesilhurst Bor.",
    county: "Camden",
  },
  {
    code: "1406",
    name: "Chester Bor.",
    county: "Morris",
  },
  {
    code: "1407",
    name: "Chester Twp.",
    county: "Morris",
  },
  {
    code: "0307",
    name: "Chesterfield Twp.",
    county: "Burlington",
  },
  {
    code: "0308",
    name: "Cinnaminson Twp.",
    county: "Burlington",
  },
  {
    code: "2002",
    name: "Clark Twp.",
    county: "Union",
  },
  {
    code: "0801",
    name: "Clayton Bor.",
    county: "Gloucester",
  },
  {
    code: "0411",
    name: "Clementon Bor.",
    county: "Camden",
  },
  {
    code: "0206",
    name: "Cliffside Park Bor.",
    county: "Bergen",
  },
  {
    code: "1602",
    name: "Clifton City",
    county: "Passaic",
  },
  {
    code: "1005",
    name: "Clinton Town",
    county: "Hunterdon",
  },
  {
    code: "1006",
    name: "Clinton Twp.",
    county: "Hunterdon",
  },
  {
    code: "0207",
    name: "Closter Bor.",
    county: "Bergen",
  },
  {
    code: "0412",
    name: "Collingswood Bor.",
    county: "Camden",
  },
  {
    code: "1310",
    name: "Colts Neck Twp.",
    county: "Monmouth",
  },
  {
    code: "0602",
    name: "Commercial Twp.",
    county: "Cumberland",
  },
  {
    code: "0106",
    name: "Corbin City",
    county: "Atlantic",
  },
  {
    code: "1202",
    name: "Cranbury Twp.",
    county: "Middlesex",
  },
  {
    code: "2003",
    name: "Cranford Twp.",
    county: "Union",
  },
  {
    code: "0208",
    name: "Cresskill Bor.",
    county: "Bergen",
  },
  {
    code: "1311",
    name: "Deal Bor.",
    county: "Monmouth",
  },
  {
    code: "0603",
    name: "Deerfield Twp.",
    county: "Cumberland",
  },
  {
    code: "0309",
    name: "Delanco Twp.",
    county: "Burlington",
  },
  {
    code: "1007",
    name: "Delaware Twp.",
    county: "Hunterdon",
  },
  {
    code: "0310",
    name: "Delran Twp.",
    county: "Burlington",
  },
  {
    code: "0209",
    name: "Demarest Bor.",
    county: "Bergen",
  },
  {
    code: "0504",
    name: "Dennis Twp.",
    county: "Cape May",
  },
  {
    code: "1408",
    name: "Denville Twp.",
    county: "Morris",
  },
  {
    code: "0802",
    name: "Deptford Twp.",
    county: "Gloucester",
  },
  {
    code: "1409",
    name: "Dover Town",
    county: "Morris",
  },
  {
    code: "0604",
    name: "Downe Twp.",
    county: "Cumberland",
  },
  {
    code: "0210",
    name: "Dumont Bor.",
    county: "Bergen",
  },
  {
    code: "1203",
    name: "Dunellen Bor.",
    county: "Middlesex",
  },
  {
    code: "1509",
    name: "Eagleswood Twp.",
    county: "Ocean",
  },
  {
    code: "1008",
    name: "East Amwell Twp.",
    county: "Hunterdon",
  },
  {
    code: "1204",
    name: "East Brunswick Twp.",
    county: "Middlesex",
  },
  {
    code: "0803",
    name: "East Greenwich Twp.",
    county: "Gloucester",
  },
  {
    code: "1410",
    name: "East Hanover Twp.",
    county: "Morris",
  },
  {
    code: "0902",
    name: "East Newark Bor.",
    county: "Hudson",
  },
  {
    code: "0705",
    name: "East Orange City",
    county: "Essex",
  },
  {
    code: "0212",
    name: "East Rutherford Bor.",
    county: "Bergen",
  },
  {
    code: "1101",
    name: "East Windsor Twp.",
    county: "Mercer",
  },
  {
    code: "0311",
    name: "Eastampton Twp.",
    county: "Burlington",
  },
  {
    code: "1312",
    name: "Eatontown Bor.",
    county: "Monmouth",
  },
  {
    code: "0213",
    name: "Edgewater Bor.",
    county: "Bergen",
  },
  {
    code: "0312",
    name: "Edgewater Park Twp.",
    county: "Burlington",
  },
  {
    code: "1205",
    name: "Edison Twp.",
    county: "Middlesex",
  },
  {
    code: "0107",
    name: "Egg Harbor City",
    county: "Atlantic",
  },
  {
    code: "0108",
    name: "Egg Harbor Twp.",
    county: "Atlantic",
  },
  {
    code: "2004",
    name: "Elizabeth City",
    county: "Union",
  },
  {
    code: "0804",
    name: "Elk Twp.",
    county: "Gloucester",
  },
  {
    code: "1703",
    name: "Elmer Bor.",
    county: "Salem",
  },
  {
    code: "0211",
    name: "Elmwood Park Bor.",
    county: "Bergen",
  },
  {
    code: "1704",
    name: "Elsinboro Twp.",
    county: "Salem",
  },
  {
    code: "0214",
    name: "Emerson Bor.",
    county: "Bergen",
  },
  {
    code: "0215",
    name: "Englewood City",
    county: "Bergen",
  },
  {
    code: "0216",
    name: "Englewood Cliffs Bor.",
    county: "Bergen",
  },
  {
    code: "1313",
    name: "Englishtown Bor.",
    county: "Monmouth",
  },
  {
    code: "0706",
    name: "Essex Fells Twp.",
    county: "Essex",
  },
  {
    code: "0109",
    name: "Estell Manor City",
    county: "Atlantic",
  },
  {
    code: "0313",
    name: "Evesham Twp.",
    county: "Burlington",
  },
  {
    code: "1102",
    name: "Ewing Twp.",
    county: "Mercer",
  },
  {
    code: "1314",
    name: "Fair Haven Bor.",
    county: "Monmouth",
  },
  {
    code: "0217",
    name: "Fair Lawn Bor.",
    county: "Bergen",
  },
  {
    code: "0605",
    name: "Fairfield Twp.",
    county: "Cumberland",
  },
  {
    code: "0707",
    name: "Fairfield Twp.",
    county: "Essex",
  },
  {
    code: "0218",
    name: "Fairview Bor.",
    county: "Bergen",
  },
  {
    code: "2005",
    name: "Fanwood Bor.",
    county: "Union",
  },
  {
    code: "1807",
    name: "Far Hills Bor.",
    county: "Somerset",
  },
  {
    code: "1315",
    name: "Farmingdale Bor.",
    county: "Monmouth",
  },
  {
    code: "0314",
    name: "Fieldsboro Bor.",
    county: "Burlington",
  },
  {
    code: "1009",
    name: "Flemington Bor.",
    county: "Hunterdon",
  },
  {
    code: "0315",
    name: "Florence Twp.",
    county: "Burlington",
  },
  {
    code: "1411",
    name: "Florham Park Bor.",
    county: "Morris",
  },
  {
    code: "0110",
    name: "Folsom Bor.",
    county: "Atlantic",
  },
  {
    code: "0219",
    name: "Fort Lee Bor.",
    county: "Bergen",
  },
  {
    code: "1905",
    name: "Frankford Twp.",
    county: "Sussex",
  },
  {
    code: "1906",
    name: "Franklin Bor.",
    county: "Sussex",
  },
  {
    code: "0220",
    name: "Franklin Lakes Bor.",
    county: "Bergen",
  },
  {
    code: "0805",
    name: "Franklin Twp.",
    county: "Gloucester",
  },
  {
    code: "1010",
    name: "Franklin Twp.",
    county: "Hunterdon",
  },
  {
    code: "1808",
    name: "Franklin Twp.",
    county: "Somerset",
  },
  {
    code: "2105",
    name: "Franklin Twp.",
    county: "Warren",
  },
  {
    code: "1907",
    name: "Fredon Twp.",
    county: "Sussex",
  },
  {
    code: "1316",
    name: "Freehold Bor.",
    county: "Monmouth",
  },
  {
    code: "1317",
    name: "Freehold Twp.",
    county: "Monmouth",
  },
  {
    code: "2106",
    name: "Frelinghuysen Twp.",
    county: "Warren",
  },
  {
    code: "1011",
    name: "Frenchtown Bor.",
    county: "Hunterdon",
  },
  {
    code: "0111",
    name: "Galloway Twp.",
    county: "Atlantic",
  },
  {
    code: "0221",
    name: "Garfield City",
    county: "Bergen",
  },
  {
    code: "2006",
    name: "Garwood Bor.",
    county: "Union",
  },
  {
    code: "0413",
    name: "Gibbsboro Bor.",
    county: "Camden",
  },
  {
    code: "0806",
    name: "Glassboro Bor.",
    county: "Gloucester",
  },
  {
    code: "1012",
    name: "Glen Gardner Bor.",
    county: "Hunterdon",
  },
  {
    code: "0708",
    name: "Glen Ridge Bor. Twp.",
    county: "Essex",
  },
  {
    code: "0222",
    name: "Glen Rock Bor.",
    county: "Bergen",
  },
  {
    code: "0414",
    name: "Gloucester City",
    county: "Camden",
  },
  {
    code: "0415",
    name: "Gloucester Twp.",
    county: "Camden",
  },
  {
    code: "1809",
    name: "Green Brook Twp.",
    county: "Somerset",
  },
  {
    code: "1908",
    name: "Green Twp.",
    county: "Sussex",
  },
  {
    code: "0606",
    name: "Greenwich Twp.",
    county: "Cumberland",
  },
  {
    code: "0807",
    name: "Greenwich Twp.",
    county: "Gloucester",
  },
  {
    code: "2107",
    name: "Greenwich Twp.",
    county: "Warren",
  },
  {
    code: "0903",
    name: "Guttenberg Town",
    county: "Hudson",
  },
  {
    code: "0223",
    name: "Hackensack City",
    county: "Bergen",
  },
  {
    code: "2108",
    name: "Hackettstown Town",
    county: "Warren",
  },
  {
    code: "0418",
    name: "Haddon Heights Bor.",
    county: "Camden",
  },
  {
    code: "0416",
    name: "Haddon Twp.",
    county: "Camden",
  },
  {
    code: "0417",
    name: "Haddonfield Bor.",
    county: "Camden",
  },
  {
    code: "0316",
    name: "Hainesport Twp.",
    county: "Burlington",
  },
  {
    code: "1603",
    name: "Haledon Bor.",
    county: "Passaic",
  },
  {
    code: "1909",
    name: "Hamburg Bor.",
    county: "Sussex",
  },
  {
    code: "0112",
    name: "Hamilton Twp.",
    county: "Atlantic",
  },
  {
    code: "1103",
    name: "Hamilton Twp.",
    county: "Mercer",
  },
  {
    code: "0113",
    name: "Hammonton Town",
    county: "Atlantic",
  },
  {
    code: "1013",
    name: "Hampton Bor.",
    county: "Hunterdon",
  },
  {
    code: "1910",
    name: "Hampton Twp.",
    county: "Sussex",
  },
  {
    code: "1412",
    name: "Hanover Twp.",
    county: "Morris",
  },
  {
    code: "1413",
    name: "Harding Twp.",
    county: "Morris",
  },
  {
    code: "2109",
    name: "Hardwick Twp.",
    county: "Warren",
  },
  {
    code: "1911",
    name: "Hardyston Twp.",
    county: "Sussex",
  },
  {
    code: "2110",
    name: "Harmony Twp.",
    county: "Warren",
  },
  {
    code: "0224",
    name: "Harrington Park Bor.",
    county: "Bergen",
  },
  {
    code: "0904",
    name: "Harrison Town",
    county: "Hudson",
  },
  {
    code: "0808",
    name: "Harrison Twp.",
    county: "Gloucester",
  },
  {
    code: "1510",
    name: "Harvey Cedars Bor.",
    county: "Ocean",
  },
  {
    code: "0225",
    name: "Hasbrouck Heights Bor.",
    county: "Bergen",
  },
  {
    code: "0226",
    name: "Haworth Bor.",
    county: "Bergen",
  },
  {
    code: "1604",
    name: "Hawthorne Bor.",
    county: "Passaic",
  },
  {
    code: "1318",
    name: "Hazlet Twp.",
    county: "Monmouth",
  },
  {
    code: "1206",
    name: "Helmetta Bor.",
    county: "Middlesex",
  },
  {
    code: "0419",
    name: "Hi-Nella Bor.",
    county: "Camden",
  },
  {
    code: "1014",
    name: "High Bridge Bor.",
    county: "Hunterdon",
  },
  {
    code: "1207",
    name: "Highland Park Bor.",
    county: "Middlesex",
  },
  {
    code: "1319",
    name: "Highlands Bor.",
    county: "Monmouth",
  },
  {
    code: "1104",
    name: "Hightstown Bor.",
    county: "Mercer",
  },
  {
    code: "1810",
    name: "Hillsborough. Twp.",
    county: "Somerset",
  },
  {
    code: "0227",
    name: "Hillsdale Bor.",
    county: "Bergen",
  },
  {
    code: "2007",
    name: "Hillside Twp.",
    county: "Union",
  },
  {
    code: "0228",
    name: "Ho Ho Kus Bor.",
    county: "Bergen",
  },
  {
    code: "0905",
    name: "Hoboken City",
    county: "Hudson",
  },
  {
    code: "1015",
    name: "Holland Twp.",
    county: "Hunterdon",
  },
  {
    code: "1320",
    name: "Holmdel Twp.",
    county: "Monmouth",
  },
  {
    code: "1912",
    name: "Hopatcong Bor.",
    county: "Sussex",
  },
  {
    code: "2111",
    name: "Hope Twp.",
    county: "Warren",
  },
  {
    code: "1105",
    name: "Hopewell Bor.",
    county: "Mercer",
  },
  {
    code: "0607",
    name: "Hopewell Twp.",
    county: "Cumberland",
  },
  {
    code: "1106",
    name: "Hopewell Twp.",
    county: "Mercer",
  },
  {
    code: "1321",
    name: "Howell Twp.",
    county: "Monmouth",
  },
  {
    code: "2112",
    name: "Independence Twp.",
    county: "Warren",
  },
  {
    code: "1322",
    name: "Interlaken Bor.",
    county: "Monmouth",
  },
  {
    code: "0709",
    name: "Irvington Twp.",
    county: "Essex",
  },
  {
    code: "1511",
    name: "Island Heights Bor.",
    county: "Ocean",
  },
  {
    code: "1512",
    name: "Jackson Twp.",
    county: "Ocean",
  },
  {
    code: "1208",
    name: "Jamesburg Bor.",
    county: "Middlesex",
  },
  {
    code: "1414",
    name: "Jefferson Twp.",
    county: "Morris",
  },
  {
    code: "0906",
    name: "Jersey City",
    county: "Hudson",
  },
  {
    code: "1323",
    name: "Keansburg Bor.",
    county: "Monmouth",
  },
  {
    code: "0907",
    name: "Kearny Town",
    county: "Hudson",
  },
  {
    code: "2008",
    name: "Kenilworth Bor.",
    county: "Union",
  },
  {
    code: "1324",
    name: "Keyport Bor.",
    county: "Monmouth",
  },
  {
    code: "1016",
    name: "Kingwood Twp.",
    county: "Hunterdon",
  },
  {
    code: "1415",
    name: "Kinnelon Bor.",
    county: "Morris",
  },
  {
    code: "2113",
    name: "Knowlton Twp.",
    county: "Warren",
  },
  {
    code: "1513",
    name: "Lacey Twp.",
    county: "Ocean",
  },
  {
    code: "1913",
    name: "Lafayette Twp.",
    county: "Sussex",
  },
  {
    code: "1346",
    name: "Lake Como Bor.",
    county: "Monmouth",
  },
  {
    code: "1514",
    name: "Lakehurst Bor.",
    county: "Ocean",
  },
  {
    code: "1515",
    name: "Lakewood Twp.",
    county: "Ocean",
  },
  {
    code: "1017",
    name: "Lambertville City",
    county: "Hunterdon",
  },
  {
    code: "0420",
    name: "Laurel Springs Bor.",
    county: "Camden",
  },
  {
    code: "1516",
    name: "Lavallette Bor.",
    county: "Ocean",
  },
  {
    code: "0421",
    name: "Lawnside Bor.",
    county: "Camden",
  },
  {
    code: "0608",
    name: "Lawrence Twp.",
    county: "Cumberland",
  },
  {
    code: "1107",
    name: "Lawrence Twp.",
    county: "Mercer",
  },
  {
    code: "1018",
    name: "Lebanon Bor.",
    county: "Hunterdon",
  },
  {
    code: "1019",
    name: "Lebanon Twp.",
    county: "Hunterdon",
  },
  {
    code: "0229",
    name: "Leonia Bor.",
    county: "Bergen",
  },
  {
    code: "2114",
    name: "Liberty Twp.",
    county: "Warren",
  },
  {
    code: "1416",
    name: "Lincoln Park Bor.",
    county: "Morris",
  },
  {
    code: "2009",
    name: "Linden City",
    county: "Union",
  },
  {
    code: "0422",
    name: "Lindenwold Bor.",
    county: "Camden",
  },
  {
    code: "0114",
    name: "Linwood City",
    county: "Atlantic",
  },
  {
    code: "1517",
    name: "Little Egg Harbor Twp.",
    county: "Ocean",
  },
  {
    code: "1605",
    name: "Little Falls Twp.",
    county: "Passaic",
  },
  {
    code: "0230",
    name: "Little Ferry Bor.",
    county: "Bergen",
  },
  {
    code: "1325",
    name: "Little Silver Bor.",
    county: "Monmouth",
  },
  {
    code: "0710",
    name: "Livingston Twp.",
    county: "Essex",
  },
  {
    code: "1326",
    name: "Loch Arbour Village",
    county: "Monmouth",
  },
  {
    code: "0231",
    name: "Lodi Bor.",
    county: "Bergen",
  },
  {
    code: "0809",
    name: "Logan Twp.",
    county: "Gloucester",
  },
  {
    code: "1518",
    name: "Long Beach Twp.",
    county: "Ocean",
  },
  {
    code: "1327",
    name: "Long Branch City",
    county: "Monmouth",
  },
  {
    code: "1430",
    name: "Long Hill Twp.",
    county: "Morris",
  },
  {
    code: "0115",
    name: "Longport Bor.",
    county: "Atlantic",
  },
  {
    code: "2115",
    name: "Lopatcong Twp.",
    county: "Warren",
  },
  {
    code: "1705",
    name: "Lower Alloways Crk. Twp.",
    county: "Salem",
  },
  {
    code: "0505",
    name: "Lower Twp.",
    county: "Cape May",
  },
  {
    code: "0317",
    name: "Lumberton Twp.",
    county: "Burlington",
  },
  {
    code: "0232",
    name: "Lyndhurst Twp.",
    county: "Bergen",
  },
  {
    code: "1417",
    name: "Madison Bor.",
    county: "Morris",
  },
  {
    code: "0423",
    name: "Magnolia Bor.",
    county: "Camden",
  },
  {
    code: "0233",
    name: "Mahwah Twp.",
    county: "Bergen",
  },
  {
    code: "1328",
    name: "Manalapan Twp.",
    county: "Monmouth",
  },
  {
    code: "1329",
    name: "Manasquan Bor.",
    county: "Monmouth",
  },
  {
    code: "1519",
    name: "Manchester Twp.",
    county: "Ocean",
  },
  {
    code: "1706",
    name: "Mannington Twp.",
    county: "Salem",
  },
  {
    code: "0318",
    name: "Mansfield Twp.",
    county: "Burlington",
  },
  {
    code: "2116",
    name: "Mansfield Twp.",
    county: "Warren",
  },
  {
    code: "1520",
    name: "Mantoloking Bor.",
    county: "Ocean",
  },
  {
    code: "0810",
    name: "Mantua Twp.",
    county: "Gloucester",
  },
  {
    code: "1811",
    name: "Manville Bor.",
    county: "Somerset",
  },
  {
    code: "0319",
    name: "Maple Shade Twp.",
    county: "Burlington",
  },
  {
    code: "0711",
    name: "Maplewood Twp.",
    county: "Essex",
  },
  {
    code: "0116",
    name: "Margate City",
    county: "Atlantic",
  },
  {
    code: "1330",
    name: "Marlboro Twp.",
    county: "Monmouth",
  },
  {
    code: "1331",
    name: "Matawan Bor.",
    county: "Monmouth",
  },
  {
    code: "0609",
    name: "Maurice River Twp.",
    county: "Cumberland",
  },
  {
    code: "0234",
    name: "Maywood Bor.",
    county: "Bergen",
  },
  {
    code: "0321",
    name: "Medford Lakes Bor.",
    county: "Burlington",
  },
  {
    code: "0320",
    name: "Medford Twp.",
    county: "Burlington",
  },
  {
    code: "1418",
    name: "Mendham Bor.",
    county: "Morris",
  },
  {
    code: "1419",
    name: "Mendham Twp.",
    county: "Morris",
  },
  {
    code: "0424",
    name: "Merchantville Bor.",
    county: "Camden",
  },
  {
    code: "1209",
    name: "Metuchen Bor.",
    county: "Middlesex",
  },
  {
    code: "0506",
    name: "Middle Twp.",
    county: "Cape May",
  },
  {
    code: "1210",
    name: "Middlesex Bor.",
    county: "Middlesex",
  },
  {
    code: "1332",
    name: "Middletown Twp.",
    county: "Monmouth",
  },
  {
    code: "0235",
    name: "Midland Park Bor.",
    county: "Bergen",
  },
  {
    code: "1020",
    name: "Milford Bor.",
    county: "Hunterdon",
  },
  {
    code: "0712",
    name: "Millburn Twp.",
    county: "Essex",
  },
  {
    code: "1812",
    name: "Millstone Bor.",
    county: "Somerset",
  },
  {
    code: "1333",
    name: "Millstone Twp.",
    county: "Monmouth",
  },
  {
    code: "1211",
    name: "Milltown Bor.",
    county: "Middlesex",
  },
  {
    code: "0610",
    name: "Millville City",
    county: "Cumberland",
  },
  {
    code: "1420",
    name: "Mine Hill Twp.",
    county: "Morris",
  },
  {
    code: "1334",
    name: "Monmouth Beach Bor.",
    county: "Monmouth",
  },
  {
    code: "0811",
    name: "Monroe Twp.",
    county: "Gloucester",
  },
  {
    code: "1212",
    name: "Monroe Twp.",
    county: "Middlesex",
  },
  {
    code: "1914",
    name: "Montague Twp.",
    county: "Sussex",
  },
  {
    code: "0713",
    name: "Montclair Twp.",
    county: "Essex",
  },
  {
    code: "1813",
    name: "Montgomery Twp.",
    county: "Somerset",
  },
  {
    code: "0236",
    name: "Montvale Bor.",
    county: "Bergen",
  },
  {
    code: "1421",
    name: "Montville Twp.",
    county: "Morris",
  },
  {
    code: "0237",
    name: "Moonachie Bor.",
    county: "Bergen",
  },
  {
    code: "0322",
    name: "Moorestown Twp.",
    county: "Burlington",
  },
  {
    code: "1423",
    name: "Morris Plains Bor.",
    county: "Morris",
  },
  {
    code: "1422",
    name: "Morris Twp.",
    county: "Morris",
  },
  {
    code: "1424",
    name: "Morristown Town",
    county: "Morris",
  },
  {
    code: "0425",
    name: "Mount Ephraim Bor.",
    county: "Camden",
  },
  {
    code: "0323",
    name: "Mount Holly Twp.",
    county: "Burlington",
  },
  {
    code: "0324",
    name: "Mount Laurel Twp.",
    county: "Burlington",
  },
  {
    code: "1425",
    name: "Mountain Lakes Bor.",
    county: "Morris",
  },
  {
    code: "2010",
    name: "Mountainside Bor.",
    county: "Union",
  },
  {
    code: "1426",
    name: "Mt. Arlington Bor.",
    county: "Morris",
  },
  {
    code: "1427",
    name: "Mt. Olive Twp.",
    county: "Morris",
  },
  {
    code: "0117",
    name: "Mullica Twp.",
    county: "Atlantic",
  },
  {
    code: "0812",
    name: "National Park Bor.",
    county: "Gloucester",
  },
  {
    code: "1336",
    name: "Neptune City Bor.",
    county: "Monmouth",
  },
  {
    code: "1335",
    name: "Neptune Twp.",
    county: "Monmouth",
  },
  {
    code: "1428",
    name: "Netcong Bor.",
    county: "Morris",
  },
  {
    code: "1213",
    name: "New Brunswick City",
    county: "Middlesex",
  },
  {
    code: "0325",
    name: "New Hanover Twp.",
    county: "Burlington",
  },
  {
    code: "0238",
    name: "New Milford Bor.",
    county: "Bergen",
  },
  {
    code: "2011",
    name: "New Providence Bor.",
    county: "Union",
  },
  {
    code: "0714",
    name: "Newark City",
    county: "Essex",
  },
  {
    code: "0813",
    name: "Newfield Bor.",
    county: "Gloucester",
  },
  {
    code: "1915",
    name: "Newton Town",
    county: "Sussex",
  },
  {
    code: "0239",
    name: "North Arlington Bor.",
    county: "Bergen",
  },
  {
    code: "0908",
    name: "North Bergen Twp.",
    county: "Hudson",
  },
  {
    code: "1214",
    name: "North Brunswick Twp.",
    county: "Middlesex",
  },
  {
    code: "0715",
    name: "North Caldwell Bor.",
    county: "Essex",
  },
  {
    code: "1606",
    name: "North Haledon Bor.",
    county: "Passaic",
  },
  {
    code: "0326",
    name: "North Hanover Twp.",
    county: "Burlington",
  },
  {
    code: "1814",
    name: "North Plainfield Bor.",
    county: "Somerset",
  },
  {
    code: "0507",
    name: "North Wildwood City",
    county: "Cape May",
  },
  {
    code: "0118",
    name: "Northfield City",
    county: "Atlantic",
  },
  {
    code: "0240",
    name: "Northvale Bor.",
    county: "Bergen",
  },
  {
    code: "0241",
    name: "Norwood Bor.",
    county: "Bergen",
  },
  {
    code: "0716",
    name: "Nutley Twp.",
    county: "Essex",
  },
  {
    code: "0242",
    name: "Oakland Bor.",
    county: "Bergen",
  },
  {
    code: "0426",
    name: "Oaklyn Bor.",
    county: "Camden",
  },
  {
    code: "0508",
    name: "Ocean City",
    county: "Cape May",
  },
  {
    code: "1522",
    name: "Ocean Gate Bor.",
    county: "Ocean",
  },
  {
    code: "1337",
    name: "Ocean Twp.",
    county: "Monmouth",
  },
  {
    code: "1521",
    name: "Ocean Twp.",
    county: "Ocean",
  },
  {
    code: "1338",
    name: "Oceanport Bor.",
    county: "Monmouth",
  },
  {
    code: "1916",
    name: "Ogdensburg Bor.",
    county: "Sussex",
  },
  {
    code: "1215",
    name: "Old Bridge Twp.",
    county: "Middlesex",
  },
  {
    code: "0243",
    name: "Old Tappan Bor.",
    county: "Bergen",
  },
  {
    code: "1707",
    name: "Oldmans Twp.",
    county: "Salem",
  },
  {
    code: "0244",
    name: "Oradell Bor.",
    county: "Bergen",
  },
  {
    code: "0717",
    name: "Orange City",
    county: "Essex",
  },
  {
    code: "2117",
    name: "Oxford Twp.",
    county: "Warren",
  },
  {
    code: "0245",
    name: "Palisades Park Bor.",
    county: "Bergen",
  },
  {
    code: "0327",
    name: "Palmyra Bor.",
    county: "Burlington",
  },
  {
    code: "0246",
    name: "Paramus Bor.",
    county: "Bergen",
  },
  {
    code: "0247",
    name: "Park Ridge Bor.",
    county: "Bergen",
  },
  {
    code: "1429",
    name: "Parsippany-Troy Hills Twp.",
    county: "Morris",
  },
  {
    code: "1607",
    name: "Passaic City",
    county: "Passaic",
  },
  {
    code: "1608",
    name: "Paterson City",
    county: "Passaic",
  },
  {
    code: "0814",
    name: "Paulsboro Bor.",
    county: "Gloucester",
  },
  {
    code: "1815",
    name: "Peapack & Gladstone Bor.",
    county: "Somerset",
  },
  {
    code: "0328",
    name: "Pemberton Bor.",
    county: "Burlington",
  },
  {
    code: "0329",
    name: "Pemberton Twp.",
    county: "Burlington",
  },
  {
    code: "1108",
    name: "Pennington Bor.",
    county: "Mercer",
  },
  {
    code: "1708",
    name: "Penns Grove Bor.",
    county: "Salem",
  },
  {
    code: "0427",
    name: "Pennsauken Twp.",
    county: "Camden",
  },
  {
    code: "1709",
    name: "Pennsville Twp.",
    county: "Salem",
  },
  {
    code: "1431",
    name: "Pequannock Twp.",
    county: "Morris",
  },
  {
    code: "1216",
    name: "Perth Amboy City",
    county: "Middlesex",
  },
  {
    code: "2119",
    name: "Phillipsburg Town",
    county: "Warren",
  },
  {
    code: "1710",
    name: "Pilesgrove Twp.",
    county: "Salem",
  },
  {
    code: "1523",
    name: "Pine Beach Bor.",
    county: "Ocean",
  },
  {
    code: "0428",
    name: "Pine Hill Bor.",
    county: "Camden",
  },
  {
    code: "0429",
    name: "Pine Valley Bor.",
    county: "Camden",
  },
  {
    code: "1217",
    name: "Piscataway Twp.",
    county: "Middlesex",
  },
  {
    code: "0815",
    name: "Pitman Bor.",
    county: "Gloucester",
  },
  {
    code: "1711",
    name: "Pittsgrove Twp.",
    county: "Salem",
  },
  {
    code: "2012",
    name: "Plainfield City",
    county: "Union",
  },
  {
    code: "1218",
    name: "Plainsboro Twp.",
    county: "Middlesex",
  },
  {
    code: "0119",
    name: "Pleasantville City",
    county: "Atlantic",
  },
  {
    code: "1524",
    name: "Plumsted Twp.",
    county: "Ocean",
  },
  {
    code: "2120",
    name: "Pohatcong Twp.",
    county: "Warren",
  },
  {
    code: "1525",
    name: "Point Pleasant Bor.",
    county: "Ocean",
  },
  {
    code: "1609",
    name: "Pompton Lakes Bor.",
    county: "Passaic",
  },
  {
    code: "0120",
    name: "Port Republic City",
    county: "Atlantic",
  },
  {
    code: "1109",
    name: "Princeton Bor.",
    county: "Mercer",
  },
  {
    code: "1110",
    name: "Princeton Twp.",
    county: "Mercer",
  },
  {
    code: "1610",
    name: "Prospect Park Bor.",
    county: "Passaic",
  },
  {
    code: "1526",
    name: "Pt. Pleasant Beach Bor.",
    county: "Ocean",
  },
  {
    code: "1712",
    name: "Quinton Twp.",
    county: "Salem",
  },
  {
    code: "2013",
    name: "Rahway City",
    county: "Union",
  },
  {
    code: "0248",
    name: "Ramsey Bor.",
    county: "Bergen",
  },
  {
    code: "1432",
    name: "Randolph Twp.",
    county: "Morris",
  },
  {
    code: "1816",
    name: "Raritan Bor.",
    county: "Somerset",
  },
  {
    code: "1021",
    name: "Raritan Twp.",
    county: "Hunterdon",
  },
  {
    code: "1022",
    name: "Readington Twp.",
    county: "Hunterdon",
  },
  {
    code: "1339",
    name: "Red Bank Bor.",
    county: "Monmouth",
  },
  {
    code: "0249",
    name: "Ridgefield Bor.",
    county: "Bergen",
  },
  {
    code: "0250",
    name: "Ridgefield Park Village",
    county: "Bergen",
  },
  {
    code: "0251",
    name: "Ridgewood Village",
    county: "Bergen",
  },
  {
    code: "1611",
    name: "Ringwood Bor.",
    county: "Passaic",
  },
  {
    code: "0252",
    name: "River Edge Bor.",
    county: "Bergen",
  },
  {
    code: "0253",
    name: "River Vale Twp.",
    county: "Bergen",
  },
  {
    code: "1433",
    name: "Riverdale Bor.",
    county: "Morris",
  },
  {
    code: "0330",
    name: "Riverside Twp.",
    county: "Burlington",
  },
  {
    code: "0331",
    name: "Riverton Bor.",
    county: "Burlington",
  },
  {
    code: "1112",
    name: "Robbinsville Twp.",
    county: "Mercer",
  },
  {
    code: "0254",
    name: "Rochelle Park Twp.",
    county: "Bergen",
  },
  {
    code: "1434",
    name: "Rockaway Bor.",
    county: "Morris",
  },
  {
    code: "1435",
    name: "Rockaway Twp.",
    county: "Morris",
  },
  {
    code: "0255",
    name: "Rockleigh Bor.",
    county: "Bergen",
  },
  {
    code: "1817",
    name: "Rocky Hill Bor.",
    county: "Somerset",
  },
  {
    code: "1340",
    name: "Roosevelt Bor.",
    county: "Monmouth",
  },
  {
    code: "0718",
    name: "Roseland Bor.",
    county: "Essex",
  },
  {
    code: "2014",
    name: "Roselle Bor.",
    county: "Union",
  },
  {
    code: "2015",
    name: "Roselle Park Bor.",
    county: "Union",
  },
  {
    code: "1436",
    name: "Roxbury Twp.",
    county: "Morris",
  },
  {
    code: "1341",
    name: "Rumson Bor.",
    county: "Monmouth",
  },
  {
    code: "0430",
    name: "Runnemede Bor.",
    county: "Camden",
  },
  {
    code: "0256",
    name: "Rutherford Bor.",
    county: "Bergen",
  },
  {
    code: "0257",
    name: "Saddle Brook Twp.",
    county: "Bergen",
  },
  {
    code: "0258",
    name: "Saddle River Bor.",
    county: "Bergen",
  },
  {
    code: "1713",
    name: "Salem City",
    county: "Salem",
  },
  {
    code: "1917",
    name: "Sandyston Twp.",
    county: "Sussex",
  },
  {
    code: "1219",
    name: "Sayreville Bor.",
    county: "Middlesex",
  },
  {
    code: "2016",
    name: "Scotch Plains Twp.",
    county: "Union",
  },
  {
    code: "1342",
    name: "Sea Bright Bor.",
    county: "Monmouth",
  },
  {
    code: "1343",
    name: "Sea Girt Bor.",
    county: "Monmouth",
  },
  {
    code: "0509",
    name: "Sea Isle City",
    county: "Cape May",
  },
  {
    code: "1527",
    name: "Seaside Heights Bor.",
    county: "Ocean",
  },
  {
    code: "1528",
    name: "Seaside Park Bor.",
    county: "Ocean",
  },
  {
    code: "0909",
    name: "Secaucus Town",
    county: "Hudson",
  },
  {
    code: "0332",
    name: "Shamong Twp.",
    county: "Burlington",
  },
  {
    code: "0611",
    name: "Shiloh Bor.",
    county: "Cumberland",
  },
  {
    code: "1529",
    name: "Ship Bottom Bor.",
    county: "Ocean",
  },
  {
    code: "1344",
    name: "Shrewsbury Bor.",
    county: "Monmouth",
  },
  {
    code: "1345",
    name: "Shrewsbury Twp.",
    county: "Monmouth",
  },
  {
    code: "0431",
    name: "Somerdale Bor.",
    county: "Camden",
  },
  {
    code: "0121",
    name: "Somers Point City",
    county: "Atlantic",
  },
  {
    code: "1818",
    name: "Somerville Bor.",
    county: "Somerset",
  },
  {
    code: "1220",
    name: "South Amboy City",
    county: "Middlesex",
  },
  {
    code: "1819",
    name: "South Bound Brook Bor.",
    county: "Somerset",
  },
  {
    code: "1221",
    name: "South Brunswick Twp.",
    county: "Middlesex",
  },
  {
    code: "0259",
    name: "South Hackensack Twp.",
    county: "Bergen",
  },
  {
    code: "0816",
    name: "South Harrison Twp.",
    county: "Gloucester",
  },
  {
    code: "0719",
    name: "South Orange Village Twp.",
    county: "Essex",
  },
  {
    code: "1222",
    name: "South Plainfield Bor.",
    county: "Middlesex",
  },
  {
    code: "1223",
    name: "South River Bor.",
    county: "Middlesex",
  },
  {
    code: "1530",
    name: "South Toms River Bor.",
    county: "Ocean",
  },
  {
    code: "0333",
    name: "Southampton Twp.",
    county: "Burlington",
  },
  {
    code: "1918",
    name: "Sparta Twp.",
    county: "Sussex",
  },
  {
    code: "1224",
    name: "Spotswood Bor.",
    county: "Middlesex",
  },
  {
    code: "1347",
    name: "Spring Lake Bor.",
    county: "Monmouth",
  },
  {
    code: "1348",
    name: "Spring Lake Heights Bor.",
    county: "Monmouth",
  },
  {
    code: "0334",
    name: "Springfield Twp.",
    county: "Burlington",
  },
  {
    code: "2017",
    name: "Springfield Twp.",
    county: "Union",
  },
  {
    code: "1531",
    name: "Stafford Twp.",
    county: "Ocean",
  },
  {
    code: "1919",
    name: "Stanhope Bor.",
    county: "Sussex",
  },
  {
    code: "1920",
    name: "Stillwater Twp.",
    county: "Sussex",
  },
  {
    code: "1023",
    name: "Stockton Bor.",
    county: "Hunterdon",
  },
  {
    code: "0510",
    name: "Stone Harbor Bor.",
    county: "Cape May",
  },
  {
    code: "0612",
    name: "Stow Creek Twp.",
    county: "Cumberland",
  },
  {
    code: "0432",
    name: "Stratford Bor.",
    county: "Camden",
  },
  {
    code: "2018",
    name: "Summit City",
    county: "Union",
  },
  {
    code: "1532",
    name: "Surf City Bor.",
    county: "Ocean",
  },
  {
    code: "1921",
    name: "Sussex Bor.",
    county: "Sussex",
  },
  {
    code: "0817",
    name: "Swedesboro Bor.",
    county: "Gloucester",
  },
  {
    code: "0335",
    name: "Tabernacle Twp.",
    county: "Burlington",
  },
  {
    code: "0433",
    name: "Tavistock Bor.",
    county: "Camden",
  },
  {
    code: "0260",
    name: "Teaneck Twp.",
    county: "Bergen",
  },
  {
    code: "0261",
    name: "Tenafly Bor.",
    county: "Bergen",
  },
  {
    code: "0262",
    name: "Teterboro Bor.",
    county: "Bergen",
  },
  {
    code: "1024",
    name: "Tewksbury Twp.",
    county: "Hunterdon",
  },
  {
    code: "1349",
    name: "Tinton Falls Bor.",
    county: "Monmouth",
  },
  {
    code: "1508",
    name: "Toms River Twp.",
    county: "Ocean",
  },
  {
    code: "1612",
    name: "Totowa Bor.",
    county: "Passaic",
  },
  {
    code: "1111",
    name: "Trenton City",
    county: "Mercer",
  },
  {
    code: "1533",
    name: "Tuckerton Bor.",
    county: "Ocean",
  },
  {
    code: "1350",
    name: "Union Beach Bor.",
    county: "Monmouth",
  },
  {
    code: "0910",
    name: "Union City",
    county: "Hudson",
  },
  {
    code: "1025",
    name: "Union Twp.",
    county: "Hunterdon",
  },
  {
    code: "2019",
    name: "Union Twp.",
    county: "Union",
  },
  {
    code: "0613",
    name: "Upper Deerfield Twp.",
    county: "Cumberland",
  },
  {
    code: "1351",
    name: "Upper Freehold Twp.",
    county: "Monmouth",
  },
  {
    code: "1714",
    name: "Upper Pittsgrove Twp.",
    county: "Salem",
  },
  {
    code: "0263",
    name: "Upper Saddle River Bor.",
    county: "Bergen",
  },
  {
    code: "0511",
    name: "Upper Twp.",
    county: "Cape May",
  },
  {
    code: "0122",
    name: "Ventnor City",
    county: "Atlantic",
  },
  {
    code: "1922",
    name: "Vernon Twp.",
    county: "Sussex",
  },
  {
    code: "0720",
    name: "Verona Twp.",
    county: "Essex",
  },
  {
    code: "1437",
    name: "Victory Gardens Bor.",
    county: "Morris",
  },
  {
    code: "0614",
    name: "Vineland City",
    county: "Cumberland",
  },
  {
    code: "0434",
    name: "Voorhees Twp.",
    county: "Camden",
  },
  {
    code: "0264",
    name: "Waldwick Bor.",
    county: "Bergen",
  },
  {
    code: "1352",
    name: "Wall Twp.",
    county: "Monmouth",
  },
  {
    code: "0265",
    name: "Wallington Bor.",
    county: "Bergen",
  },
  {
    code: "1923",
    name: "Walpack Twp.",
    county: "Sussex",
  },
  {
    code: "1613",
    name: "Wanaque Bor.",
    county: "Passaic",
  },
  {
    code: "1924",
    name: "Wantage Twp.",
    county: "Sussex",
  },
  {
    code: "1820",
    name: "Warren Twp.",
    county: "Somerset",
  },
  {
    code: "2121",
    name: "Washington Bor.",
    county: "Warren",
  },
  {
    code: "0266",
    name: "Washington Twp.",
    county: "Bergen",
  },
  {
    code: "0336",
    name: "Washington Twp.",
    county: "Burlington",
  },
  {
    code: "0818",
    name: "Washington Twp.",
    county: "Gloucester",
  },
  {
    code: "1438",
    name: "Washington Twp.",
    county: "Morris",
  },
  {
    code: "2122",
    name: "Washington Twp.",
    county: "Warren",
  },
  {
    code: "1821",
    name: "Watchung Bor.",
    county: "Somerset",
  },
  {
    code: "0435",
    name: "Waterford Twp.",
    county: "Camden",
  },
  {
    code: "1614",
    name: "Wayne Twp.",
    county: "Passaic",
  },
  {
    code: "0911",
    name: "Weehawken Twp.",
    county: "Hudson",
  },
  {
    code: "0819",
    name: "Wenonah Bor.",
    county: "Gloucester",
  },
  {
    code: "1026",
    name: "West Amwell Twp.",
    county: "Hunterdon",
  },
  {
    code: "0721",
    name: "West Caldwell Twp.",
    county: "Essex",
  },
  {
    code: "0512",
    name: "West Cape May Bor.",
    county: "Cape May",
  },
  {
    code: "0820",
    name: "West Deptford Twp.",
    county: "Gloucester",
  },
  {
    code: "1353",
    name: "West Long Branch Bor.",
    county: "Monmouth",
  },
  {
    code: "1615",
    name: "West Milford Twp.",
    county: "Passaic",
  },
  {
    code: "0912",
    name: "West New York Town",
    county: "Hudson",
  },
  {
    code: "0722",
    name: "West Orange Twp.",
    county: "Essex",
  },
  {
    code: "0513",
    name: "West Wildwood Bor.",
    county: "Cape May",
  },
  {
    code: "1113",
    name: "West Windsor Twp.",
    county: "Mercer",
  },
  {
    code: "0337",
    name: "Westampton Twp.",
    county: "Burlington",
  },
  {
    code: "2020",
    name: "Westfield Town",
    county: "Union",
  },
  {
    code: "0821",
    name: "Westville Bor.",
    county: "Gloucester",
  },
  {
    code: "0267",
    name: "Westwood Bor.",
    county: "Bergen",
  },
  {
    code: "0123",
    name: "Weymouth Twp.",
    county: "Atlantic",
  },
  {
    code: "1439",
    name: "Wharton Bor.",
    county: "Morris",
  },
  {
    code: "2123",
    name: "White Twp.",
    county: "Warren",
  },
  {
    code: "0514",
    name: "Wildwood City",
    county: "Cape May",
  },
  {
    code: "0515",
    name: "Wildwood Crest Bor.",
    county: "Cape May",
  },
  {
    code: "0338",
    name: "Willingboro Twp.",
    county: "Burlington",
  },
  {
    code: "2021",
    name: "Winfield Twp.",
    county: "Union",
  },
  {
    code: "0436",
    name: "Winslow Twp.",
    county: "Camden",
  },
  {
    code: "0269",
    name: "Wood-Ridge Bor.",
    county: "Bergen",
  },
  {
    code: "0516",
    name: "Woodbine Bor.",
    county: "Cape May",
  },
  {
    code: "1225",
    name: "Woodbridge Twp.",
    county: "Middlesex",
  },
  {
    code: "0822",
    name: "Woodbury City",
    county: "Gloucester",
  },
  {
    code: "0823",
    name: "Woodbury Heights Bor.",
    county: "Gloucester",
  },
  {
    code: "0268",
    name: "Woodcliff Lake Bor.",
    county: "Bergen",
  },
  {
    code: "1616",
    name: "Woodland Park Bor.",
    county: "Passaic",
  },
  {
    code: "0339",
    name: "Woodland Twp.",
    county: "Burlington",
  },
  {
    code: "0437",
    name: "Woodlynne Bor.",
    county: "Camden",
  },
  {
    code: "1715",
    name: "Woodstown Bor.",
    county: "Salem",
  },
  {
    code: "0824",
    name: "Woolwich Twp.",
    county: "Gloucester",
  },
  {
    code: "0340",
    name: "Wrightstown Bor.",
    county: "Burlington",
  },
  {
    code: "0270",
    name: "Wyckoff Twp.",
    county: "Bergen",
  },
];
