var config = {
    style: 'mapbox://styles/aparnanz/ckis2i50t0jsy19mj0dq1fdtv',
    accessToken: 'pk.eyJ1IjoiYXBhcm5hbnoiLCJhIjoiY2tpczQ5bzI2MDNybzJ4cWFsMG1nenZoeiJ9.dVQazRxXpgR3NJ78lpiyyg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Residential Solar Inequity In California',
    subtitle: 'Highlighting the need to apply multidimensional systems thinking to climate change solutions',
    byline: '',
    footer: '© Aparna Narang (December 2020)',
    chapters: [
        {
            id: 'chapter1',
            alignment: 'center',
            hidden: false,
            title: 'The unintended consequences of residential solar',
            image: '',
            description: 'Residential solar energy capacity in California has more than doubled within the past 5 years to reach over one million homes. This has been predominantly driven by lower costs, federal and state subsidies, and favorable electricity rate design such as enabling residential households with solar to sell their excess energy back into the grid at retail rates through net energy metering (NEM). While this quantity of solar is a significant accomplishment in the fight against climate change, it has led to unintended consequences that negatively impact lower income communities that need to be addressed. Specifically, there is structural inequity in the way that costs of utility infrastructure and services are allocated, resulting in households without solar subsidizing those that do. This more significantly impacts lower income households because wealthier households have a higher adoption rate for solar due to the ability of wealthier households to afford upfront capital investment, and have less barriers, to obtain solar for their homes to reduce their long-term energy costs. The following analysis examines the disparities of adoption in relation to specific regions of northern California.',
            location: {
                center: [-120.11592, 37.49801],
                zoom: 5.24,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter2',
            alignment: 'center',
            hidden: false,
            title: 'Northern California Adoption of Residential Solar',
            image: 'https://images2.imgbox.com/a6/5b/1WXgRFaD_o.png',
            description: 'In PG&E’s service territory, which was used as a case study for this analysis, approximately 10% of residential households have solar. Of those, over 70% are in communities where the median income is above the California household income level (based on zip code). To bring this to a neighborhood level, this study focuses on two distinct areas of northern California: 1) Fresno / Madera Counties (median income of ~$52k), and 2) Alameda County (median income >$100k).',
            location: {
                center: [-120.11592, 37.49801],
                zoom: 5.24,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                     layer: 'county-alameda-3y3lb6',
                     opacity: 0,
                     duration: 5000
                 },
              {
                     layer: 'county-fresnomadera-6fisyc',
                     opacity: 0,
                     duration: 5000
                 }
              ],
              onChapterExit: [
                {
                     layer: 'county-alameda-3y3lb6',
                     opacity: 0
                 },
              {
                     layer: 'county-fresnomadera-6fisyc',
                     opacity: 0
                 }
              ]
        },
        {
            id: 'chapter3',
            alignment: 'left',
            hidden: false,
            title: 'Fresno & Madera Counties',
            image: '',
            description: 'In the green area the household median income is $95k, 8% of the population is below the poverty level, and 26% of households have solar. Compare that to the red area where the household median income is about half at $48k, 28% of the population is below the poverty level (three times higher than the green area), and only 13% of households have solar. Additionally, the red area is in a <span><a href="https://oehha.ca.gov/calenviroscreen/report/calenviroscreen-30" target"=_blank">CalEnviro</a></span> zone which reflects California’s most pollution-burdened and vulnerable communities.',
            location: {
                center: [-120.48197, 36.73124],
                zoom: 7.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                     layer: 'zipcode-analysis3-wealthy-fre-b0iqx4',
                     opacity: .7,
                     duration: 5000
                 },
              {
                     layer: 'county-fresnomadera-6fisyc',
                     opacity: 1,
                     duration: 5000
                 },
              {
                     layer: 'zipcode-analysis3-poor-fresno-714lhd',
                     opacity: .7,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                {
                     layer: 'zipcode-analysis3-wealthy-fre-b0iqx4',
                     opacity: 0
                 },
              {
                     layer: 'county-fresnomadera-6fisyc',
                     opacity: 0
                 },
              {
                     layer: 'zipcode-analysis3-poor-fresno-714lhd',
                     opacity: 0
                 }
            ]
        },
      {
            id: 'chapter4',
            alignment: 'left',
            hidden: false,
            title: 'Alameda County',
            image: '',
            description: 'In Alameda, a wealthier county, the disparities are also stark. In the green area the household median income is $135k, 4% of the population is below the poverty level, and 16% of households have solar. Compare that to the same number of households in the red area, where the household median income is significantly lower at $48k, 23% of the population is below the poverty level (about 5 times higher than the green area), and only 2% of households have solar. The red area is also in a CalEnviro zone which reflects California’s most pollution-burdened and vulnerable communities.',
            location: {
                center: [-122.29495, 37.73811],
                zoom: 8.97,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                     layer: 'zipcode-analysis3-alameda1-po-7nd0bi',
                     opacity: .7,
                     duration: 5000
                 },
              {
                     layer: 'county-alameda-3y3lb6',
                     opacity: 1,
                     duration: 5000
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-ala-02oiue',
                     opacity: .7,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                {
                     layer: 'zipcode-analysis3-alameda1-po-7nd0bi',
                     opacity: 0
                 },
              {
                     layer: 'county-alameda-3y3lb6',
                     opacity: 0
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-ala-02oiue',
                     opacity: 0
                 }
            ]
        }, 
      {
            id: 'chapter5',
            alignment: 'left',
            hidden: false,
            title: 'The Compounding Problem',
            image: '',
            description: 'The issue of cost-shifting was recognized in the <span><a href="https://www.cpuc.ca.gov/General.aspx?id=6442463430" target"=_blank">August 2020 study</a><span> performed on behalf of the California Public Utilities Commission (CPUC) which states that “Residential customers that install customer-sited renewable resources on average pay lower bills than the utility’s cost to serve them.” As demonstrated in this analysis for northern California, higher income areas have a significantly higher adoption rate for solar, resulting in cost shifting toward the lower income / high pollution areas. Some challenges of adoption for low-income households include higher levels of households renting (vs. owning), limited access to financing, and limited outreach / marketing by solar installers. For a low-income household, every additional dollar spent on electricity takes away from another necessity such as food, healthcare or education. In 2019, almost 50% of households in Fresno & Madera county are participating in <span><a href="https://www.cpuc.ca.gov/iqap/" target"=_blank">CARE</a></span> (vs. 20% in Alameda), a discount electricity program for low-income customers. In some red area zip codes, over 10% of households were disconnected in 2016 due to inability to pay their bills, resulting in the risk of greater health impacts according to a <span><a href="http://www.turn.org/wp-content/uploads/2018/05/2018_TURN_Shut-Off-Report_FINAL.pdf" target"=_blank">TURN study</a></span>. Additionally, the cost of electricity continues to rise. One example is the average rate increase of 8% for PG&E customers starting in 2021 to support wildfire prevention efforts.',
            location: {
                center: [-124.05724, 37.43005],
                zoom: 5.24,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                     layer: 'zipcode-analysis3-alameda1-po-7nd0bi',
                     opacity: 1,
                     duration: 5000
                 },
              {
                     layer: 'county-alameda-3y3lb6',
                     opacity: 1,
                     duration: 5000
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-ala-02oiue',
                     opacity: 1,
                     duration: 5000
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-fre-b0iqx4',
                     opacity: 1,
                     duration: 1000
                 },
              {
                     layer: 'county-fresnomadera-6fisyc',
                     opacity: 1,
                     duration: 1000
                 },
              {
                     layer: 'zipcode-analysis3-poor-fresno-714lhd',
                     opacity: 1,
                     duration: 1000
                 }
              
            ],
            onChapterExit: [
                {
                     layer: 'zipcode-analysis3-alameda1-po-7nd0bi',
                     opacity: 0
                 },
              {
                     layer: 'county-alameda-3y3lb6',
                     opacity: 0
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-ala-02oiue',
                     opacity: 0
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-fre-b0iqx4',
                     opacity: 0,
                     duration: 5000
                 },
              {
                     layer: 'county-fresnomadera-6fisyc',
                     opacity: 0,
                     duration: 5000
                 },
              {
                     layer: 'zipcode-analysis3-poor-fresno-714lhd',
                     opacity: 0,
                     duration: 5000
                 }
            ]
        },
      {
            id: 'chapter6',
            alignment: 'left',
            hidden: false,
            title: 'Three Areas of Action',
            image: '',
            description: 'Initiatives structured to enable more clean energy need to consider the multidimensional aspects and impacts to society at large. Disproportionately burdening low-income communities does not constitute smart policy. In consideration of this, areas of action include: 1) Attention to this issue as part of the 2021 CPUC proceedings (NEM 3.0) is critical to ensure policy aligns with equity; 2) Support for federal and <span><a href="https://www.lowincomesolar.org/best-practices/single-family-california/" target"=_blank">state</a></span> incentives, such as upfront rebates, focused on low-income households; and 3) Donations to non-profits enabling clean energy installations in low-income communities, such as <span><a href="https://gridalternatives.org/" target"=_blank">Grid Alternatives</a></span>, can help provide greater direct and indirect contributions where it’s needed the most.',
            location: {
                center: [-124.05724, 37.43005],
                zoom: 5.24,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                     layer: 'zipcode-analysis3-alameda1-po-7nd0bi',
                     opacity: 1,
                     duration: 5000
                 },
              {
                     layer: 'county-alameda-3y3lb6',
                     opacity: 1,
                     duration: 5000
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-ala-02oiue',
                     opacity: 1,
                     duration: 5000
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-fre-b0iqx4',
                     opacity: 1,
                     duration: 1000
                 },
              {
                     layer: 'county-fresnomadera-6fisyc',
                     opacity: 1,
                     duration: 1000
                 },
              {
                     layer: 'zipcode-analysis3-poor-fresno-714lhd',
                     opacity: 1,
                     duration: 1000
                 }
              
            ],
            onChapterExit: [
                {
                     layer: 'zipcode-analysis3-alameda1-po-7nd0bi',
                     opacity: 0
                 },
              {
                     layer: 'county-alameda-3y3lb6',
                     opacity: 0
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-ala-02oiue',
                     opacity: 0
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-fre-b0iqx4',
                     opacity: 0,
                     duration: 5000
                 },
              {
                     layer: 'county-fresnomadera-6fisyc',
                     opacity: 0,
                     duration: 5000
                 },
              {
                     layer: 'zipcode-analysis3-poor-fresno-714lhd',
                     opacity: 0,
                     duration: 5000
                 }
            ]
        },
      {
            id: 'chapter7',
            alignment: 'center',
            hidden: false,
            title: 'Data Sources and References',
            image: '',
            description: 'US Census Bureau ACS 5-year 2018 (income, poverty data); California Public Utilities Commission (CPUC) Distributed Generation Interconnection Data Sets (August 2020 update; residential solar data); California Office of Environmental Health Hazard Assessment (CalEnviroScreen 3.0; June 2018); CPUC Net Energy Metering 2.0 Evaluation Itron Report (August 2020); TURN “Living Without Power Report” (2018, disconnection information); CPUC Income Qualified Assistance Programs 2019 Annual Report (CARE data)',
            location: {
                center: [-124.05724, 37.43005],
                zoom: 5.24,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                     layer: 'zipcode-analysis3-alameda1-po-7nd0bi',
                     opacity: 1,
                     duration: 5000
                 },
              {
                     layer: 'county-alameda-3y3lb6',
                     opacity: 1,
                     duration: 5000
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-ala-02oiue',
                     opacity: 1,
                     duration: 5000
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-fre-b0iqx4',
                     opacity: 1,
                     duration: 1000
                 },
              {
                     layer: 'county-fresnomadera-6fisyc',
                     opacity: 1,
                     duration: 1000
                 },
              {
                     layer: 'zipcode-analysis3-poor-fresno-714lhd',
                     opacity: 1,
                     duration: 1000
                 }
              
            ],
            onChapterExit: [
                {
                     layer: 'zipcode-analysis3-alameda1-po-7nd0bi',
                     opacity: 0
                 },
              {
                     layer: 'county-alameda-3y3lb6',
                     opacity: 0
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-ala-02oiue',
                     opacity: 0
                 },
              {
                     layer: 'zipcode-analysis3-wealthy-fre-b0iqx4',
                     opacity: 0,
                     duration: 5000
                 },
              {
                     layer: 'county-fresnomadera-6fisyc',
                     opacity: 0,
                     duration: 5000
                 },
              {
                     layer: 'zipcode-analysis3-poor-fresno-714lhd',
                     opacity: 0,
                     duration: 5000
                 }
            ]
        },   
    ]
};
