function myfunction(){
    var inputtext=form1.ID_number.value;
    document.getElementById("pdf_file").src=(inputtext);
    
    /*document.getElementById("link").href="unpaid.html"*/
    /*window.location.href = "unpaid.html"; */  
}
/*window.location.href = "https://www.example.com";   go to a hyperlink*/
function fun1(){

    var un=[2403069400,2331130381,2387854082,2377406901,2369066069,2526567488,2381325972,2358373575,2384510927,2492415290,2419272352,2523243174,2391785421,2419125592,2435280579,2573617285,2555068754,2379682996,2389333937,2553846052,2453796415,2403329069,2567093071,2371731973,2555054762,2503341899,2413782935,2434613275,4815498946,2586940740,2453658799,2405080702,2474460025,2394724294,2404656296,7412685398,2401634429,2400737124,2413892544,2534668062,2591776527,2390104657,2567334269,2406428389,2424079198,2402007799,2555054788,2395283167,2366078745,2366556823,2503341907,2476055211,2528159391,2347982932,2379169317,2550686873,2371002557,2421757036,2471561999,2553735008,2419391798,2363039245,2535653337,2534274788,5674321897,2541369875,2363585916,2375232507,2275170773,2285724247,2550074070,2535155903,2297585404,2517113086,2310233537,2277231383,2446292233,2403069392,2337780551,2390014260,2392197618,2338295849,2336383647,2328079187,2329225813,2332962022,2330796505,2378342980,2461980092,2408853584,2334957129,2504665395,2295346155,2291991996,2395283159,2497217311,2535315788,3779101237,2586212645,2317782213,2419391806,2461979375,2553846060,2303533331,2308116314,2559967191,2359824899,2577528686,2354626463,2476055203,2419272345,2340198205,2312889948,2420586840,2517986820,2553010428,2573617293,2313816403,2314338100,2517266629,3115954970,2516766736,2567358029,2456744495,2558049769,2550686881,2459203325,2591776519,2455334082,2449878822,2556406102,2517986838,2504099918,2474460033,2454475464,2459374753,2410150664,2534274796,2442934150,2553010410,2414168704,2410262881,2533888737,2419108341,2414168605,2428317438,2416684328,2423980859,2526567496,2435724980,2447826682,2476055229,2442965923,4845060534,2579885340,2463347316,2421209715,2455055760,2451282459,2497217337,2446444602,2591776584,2505944021,2444509794,2446445054,2444316349,2535315796,3659876542,2463347308,2556406094,2430223541,2430223558,2399556568,2436322719,2390836563,2534668070,2388960169,2408853592,2420849867,2449053616,2528159409,2424749436,2356129615,2863467590,2476392658,2347532232,2364953329,2390014278,2338379809,2391785413,2531532873,2489610507,2477960427,2489663795,2579885324,2504099926,2524059710,2497564498,2480188677,2525067522,2468986803,2478442078,2392197600,2434613267,3652149875,2529407245,2534274770,2756448657,2535315804,2463347290,2379101245,2392197634,2355355898,2301667891,2530831151,2429965797,2403069418,2298471968,2306975091,2556406086,2424749444,2555068747,2504655768,2336065244,2328839259,2550686865,2413471745,2332116264,2533441776,2410955294,2317937890];
    var paid=[2562468864,2555054762,2562902656,2413782935,2490361371,2394136150,2413317666,2401960717,2476885419,2558539819,2549610778,2527862565,2434613275,2431977160,2586940740,2405080702,2474460025,2552287860,2411925502,2559967209,2427731092,2464177514,2410303610,2559453630,2400737124,2401634429,2406856688,2413892544,2503183119,2534668062,2591776527,2390104657,2586374098,2387897990,2448299855,2583875915,2506880158,2501730168,2392170250,2414977013,2415841895,2554282844,2464200217,2424079198,2570891982,2538800968,2411172451,2417168362,2583582214,2490051006,2585263987,2593224369,2402007799,2389610409,4815498946,4784648877,4831024742,3115954848,2555347463,2503341899,2467993727,2553645116,2571753447,2397816717,2394724294,2404656296,2587302270,2438750214,2512609930,2558905770,2384830754,2553757945,2567334269,2407921648,2573701949,2483103830,4662132945,2568431437,2392197626,2374927180,2518421561,2387854082,2590661407,2530831169,2583582222,2489439881,2579734381,2403069400,2557800345,2387694462,2555691019,2526567488,2381325972,2554080347,2358373575,2384510927,2393862350,2419272352,2378555193,2585881077,2524712607,2473764849,2391785421,2523243174,2426410284,2524080666,2419125592,2402082305,2376769028,2362024651,2391453574,2555068754,2367790157,2497743936,2379682996,2412379733,2378142604,2504655701,2586948974,2536364389,2552491744,2505955076,2394659359,2436136457,2530258884,2372775037,2385728965,2389333937,2363682499,2495230639,2453796415,2384505497,2490050768,2378908863,2403329069,2371731973,2493321562,2492629106,2389228350,4769525124,2375487630,2587056157,2387809705,2377406901,2394804419,2530434121,2438750255,2369066069,2553107562,2406276903,2460112853,2492415290,2476000043,2381596697,2473304448,2435280579,2573617285,2537152155,2553846052,2567093071,2521614160,2502289990,4774423083,2382977391,2555054788,2396957223,2395283167,2506880125,2593224500,2366556823,2503341907,2588253001,2526712027,2555227632,2527776740,2476885435,2360179309,2581476138,2354850782,2364752275,2347982932,2397594694,2356855177,2528075472,2379169317,2528411958,2519308981,2550686873,2421757036,2471561999,2478019363,2553735008,2526896135,2419391798,2352724385,2570812152,2419072281,2526006339,2363039245,2532647852,2559453622,2362784999,2363585916,2503182962,2515879860,2456408968,2552488922,2364970026,2554630795,2553115714,2366078745,2406390571,2347139954,2476055211,2502286772,2528159391,2476000068,2371002557,2429968346,2358911226,2521411187,2476924390,2535653337,2534274788,2368528275,2361831908,2553115706,2586104446,2558293987,2334771413,2466447725,2335796526,2558293979,2403069392,2430866182,2394659342,2319062887,2316851621,2383721293,2339765451,2348801537,2491894248,2390014260,2332134549,2545909794,2338295849,2392197618,2322604683,2530258876,2585881069,2513000469,2336383647,2328079187,2329225813,2344002080,2332962022,2563015060,2370011419,2528076603,2330796505,2455342937,2430621876,2378342980,2427731084,2498427984,2328338476,2396963767,2328338641,2461980092,2328979519,2408853584,2501076679,2448299848,4855882983,2507990147,2560223303,2457346035,2337780551,2325767909,2341798524,2459556441,2505246831,2528988872,2399946710,2587056140,2329816652,2363815768,2339415412,2559967191,2501076661,2513420667,2308071188,2593224146,2552491736,2478019355,2354626463,2315067765,2419272345,2396957215,2558505711,2334193352,2333701999,2305562148,2340198205,2355017092,2553926128,2352928564,2538458270,2526712050,2565783855,2553010428,2555693700,2557800337,2405027687,2390211080,2313816403,2314338100,2517266629,2529502219,2516766736,2339412039,2524080674,4831025384,4862158898,2507990139,3115954970,2536009943,2394258855,2359824899,2577528686,2476055203,2312889948,2420586840,2517986820,2573617293,2341833594,2439765393,2461979375,2456408943,2303533331,2375232507,2275170773,2328400961,2312154848,2299526257,2557789985,2505316808,2284577075,2285724247,2550074070,2297585404,2517113086,2532217177,2310233537,2277231383,2535155903,2506999115,2528988864,2290253190,2446292233,2343133670,2536009935,2514347612,2557829864,2452992650,2452033356,2456744495,2557800352,2561689049,2552488955,2455334082,2476413907,2463277844,2458171200,2543294017,2460285873,2455034641,2556406102,2561692753,2453623353,2538272689,2529602118,2476670480,2460544725,2474460033,2571660501,2459966970,2532230329,2456235460,2461440469,2522905880,2583461559,2453796423,2459374753,2455454336,2444667139,2452109776,2579734399,2558049769,2549856967,2502278662,2579479045,2550686881,2458068364,2464191432,2549603598,2577831213,2459662306,2577713247,2583115551,2591776519,2524080682,2539860342,2454719010,2457585681,2465814586,2585387877,2577791847,2554187696,2586940747,2489439907,2517986838,2451137117,2583640434,2501942011,2581068505,2454475464,2505955092,2455372579,2459254898,2480546437,2489439899,2388960169,2411751494,2416528962,2497946307,2422447876,2408853592,2549408660,2577713239,2563015052,2411963974,2409966161,2574771354,2528076611,2515879746,2404074482,2511672764,2415051388,2412543601,2554953113,2411832070,2403507219,2414064184,2411657113,2555171566,2404725661,2408779102,2581068497,2420849867,2405088903,2415865423,2449053616,2513012613,2501076687,2398206777,2391322472,2505955084,2409298631,2583484932,2507990154,2533658577,2471562005,2577528694,2472840632,2404116168,2407423785,2550618488,2507029870,2404191294,2587721834,2535653345,2468753088,2528159409,2356593943,2581385826,2557606445,2473780522,2424749436,2368730392,2361236363,2476686668,2553654159,2413892536,2449256169,2362687473,2419125436,2365525076,2368730400,2559931213,2559930579,2555062740,2554187670,2583875907,2364953329,2501941914,2386989822,2579664091,2578808160,2521203989,2396963775,2395964014,2478826478,2577159128,2357081112,2390014278,2359824907,2415601661,2526703851,2395728187,2361095405,2356129615,2535155911,2553736774,2347532232,2491629503,2533657397,2351826181,2520309887,2359582257,2348192887,2392197600,2422447868,2434613267,2558538688,2525590036,2320995588,2481803795,2537796134,2529407245,2352153726,2328034760,2334735095,2502278654,2341429450,2375279425,2585128479,2470830643,2328325325,2325353601,2559930561,2328749169,2451329862,2584816967,2538250693,2535315804,2379101245,2392197634,2428026625,2355355898,2428600080,2374182018,2374182026,2412379725,2558905762,2534274770,2537152239,2467993719,2357962618,2571753439,2337693093,2463347290,2321044063,2483103848,2491830002,2329186403,2289479384,2338379809,2277726507,2436136655,2545909786,2533333080,2339639540,2551039395,2286285354,2271255586,2403696368,2294626524,2261555326,2391785413,2556403661,2531532873,2579664083,2447826682,2461217800,2498479373,2448466504,2443802877,2436161661,2559109802,2438737054,2444371633,2495230613,2437771716,2549405625,2555171574,2508823446,2449672787,2451886754,2438421444,2557606452,2491629511,2557606437,2455055760,2447240678,2590661399,2433253560,2442238651,2536638840,2570884433,2558293995,2553846045,2567243536,2444619395,2585158062,2430788378,2574861593,2453875250,2449288253,2582444267,2585881085,2591776584,2579899242,2448343430,2432191613,2438086734,2438628642,2513445185,2443111857,2444316349,2527862557,2536364397,2447663416,2440949259,2581580855,2568431445,2583582867,2447238466,2530831177,2476924408,2476686643,2553534476,2451891291,2487344950,2529501344,2431783147,2562902664,2526009408,2557829849,2454858396,2442131229,2555227640,2453927127,2445183763,2442965923,2538270212,2423816392,2581476120,2437502764,2581262280,2539852810,2457122436,2448842118,2455159018,2570641361,2463347316,2421209715,2451281865,2488764784,2524712615,2443967589,2446663185,2581579105,2429664226,2479197176,2502286574,2476338864,2478826460,2464446216,2576343756,2571367586,2449336664,2583461542,2558099202,2583837105,2451282459,2496177714,2448778353,2446444602,2529602019,2497217337,2490361363,2423993662,2549408652,2559730771,2464177506,2480546429,2505944021,2568955146,2444509794,2442569741,2583875923,2451879247,2446445054,2521614038,2432043780,2476055229,2573701725,2445837335,2578705671,2579885340,2531796825,2442132938,2585387851,2535315796,2530831185,2585128487,2393087479,2393042607,2404952109,2525590028,2495230621,2481979918,2504881935,2481803811,2588894929,2581580848,2423816384,2430223558,2430223541,2379169325,2372493953,2399556568,2378908871,2377493693,2436322719,2379289487,2431977186,2390836563,2576982611,2395549831,2380981288,2369232729,2529602100,2369828856,2375534803,2534668070,2577159110,2571635479,2529601730,2579624335,2428026617,2393263211,2505404869,2457346043,2372224523,2435593930,2555068747,2493321620,2504655768,2329186411,2426410250,2333934681,2529602126,2529425668,2333934699,2328839259,2529425684,2423708185,2550686865,2393263203,2436136556,2390080063,2332116264,2313520427,2580898712,2533441776,2410955294,2348950771,2317937890,2578808152,2364752291,2324309604,2532217276,2521614038,2432043780,2476055229,2573701725,2445837335,2578705671,2579885340,2531796825,2442132938,2585387851,2535315796,2530831185,2585128487,2393087479,2393042607,2404952109,2525590028,2495230621,2481979918,2504881935,2481803811,2588894929,2581580848,2423816384,2430223558,2430223541,2379169325,2372493953,2399556568,2378908871,2377493693,2436322719,2379289487,2431977186,2390836563,2576982611,2395549831,2380981288,2369232729,2529602100,2369828856,2375534803,2534668070,2577159110,2571635479,2529601730,2579624335,2428026617,2393263211,2505404869,2457346043,2372224523,2435593930];
    var inputtext=form1.ID_number.value;
    var i
    /*var unl=un.length;
    var paidl=paid.length;
    alert (paidl)*/
    for (i = 0; i <= un.length; i++) {

        if (inputtext == un[i]) {
            document.getElementById("link").href="unpaid.html"
            /*alert ("تم حجب الشهادة لعدم سداد جزء من أو كل الرسوم لمزيد من التفاصيل الرجاء الضغط على الرابط التالي \n" + "link");*/
            return true;
        }
    }

    for (i = 0; i <= paid.length; i++) {
        if (inputtext == paid[i]){
            document.getElementById("pdf_file").src=("1/"+ inputtext + ".jpg");
            document.getElementById("link1").href= "1/" + inputtext + ".jpg"
            document.getElementById('booking1').style.display = 'block';
            return true;
        }
    }
    if (inputtext == ""){
        alert ("Please Enter Student Resident Identity")
        return false;
    }
    if (isNaN( inputtext )){
        alert ("Please Enter Student Resident Identity in English Numbers Only")
        return false;
    }
alert ("Student Resident Identity Not Found")
return false;
}

function downloadFile() {
    const embedElement = document.getElementById("pdf_file");
    const sourceUrl = embedElement.getAttribute("src");
  
    const link = document.createElement("a");
    link.href = sourceUrl;
    link.download = "myfile.pdf";
    link.click();
  }

function downloadFile() {
    // Create a data URL (example)
    const dataUrl = "data:text/plain;charset=utf-8,Sample file content";
  
    // Create an anchor element
    const link = document.createElement("a");
    link.href = dataUrl;
  
    // Set the download attribute using the specified filename
    link.download = "1";
      // Trigger the click event programmatically
  link.click();
}
const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", downloadFile);

function downloadImage() {
    const link = document.createElement('a');
    link.href = '2.jpg';
    link.download = 'image.jpg';
    link.click();
  }
