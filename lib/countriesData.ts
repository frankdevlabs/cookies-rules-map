export const countriesData = [
    {
      country: "Belgium",
      code: "BE", // ISO 3166-1 alpha-2 code for Belgium
      legislation: "Law of 30 July 2018 on the Protection of Natural Persons with regard to the Processing of Personal Data",
      authority: "Data Protection Authority (GBA)",
      approach:
        "Requires prior consent for non-essential cookies, including analytical cookies, with no exceptions for low-impact analytics or audience measurement cookies.",
      color: "red", // Color for map visualization
    },  
    {
      country: "Germany",
      code: "DE", // ISO 3166-1 alpha-2 code for Germany
      legislation: "Telecommunications Telemedia Data Protection Act (TTDSG)",
      authority: "Federal and regional data protection authorities (Datenschutzkonferenz, DSK)",
      approach:
        "Requires prior consent for non-essential cookies, including analytical cookies. No exemptions for analytics or audience measurement cookies; pseudonymization is insufficient for exemption.",
      color: "red", // Color for map visualization
    },
    {
      "country": "France",
      "code": "FR",
      "legislation": "Law 'Informatique et Libertés', adapted to the GDPR",
      "authority": "Commission Nationale de l'Informatique et des Libertés (CNIL)",
      "approach": "Prior consent is required for analytical cookies unless they are strictly for anonymous audience measurement, used solely for statistical purposes, and have no impact on user privacy. Essential cookies and certain customization cookies are exempt from consent requirements.",
      "color": "orange"
    },    
    {
      "country": "Netherlands",
      "code": "NL",
      "legislation": "Telecommunications Act (Telecommunicatiewet), aligned with the ePrivacy Directive",
      "authority": "Autoriteit Persoonsgegevens (AP)",
      "approach": "User consent is required for cookies, with exemptions for strictly necessary services. Analytical cookies with low impact on privacy can be placed without consent under specific conditions, such as data anonymization and aggregation.",
      "color": "orange"
    },
    {
      "country": "Spain",
      "code": "ES",
      "legislation": "Law 34/2002 (LSSI) and Organic Law 3/2018 (LOPDGDD)",
      "authority": "Spanish Data Protection Agency (AEPD)",
      "approach": "Requires prior informed consent for analytical cookies unless strictly for anonymous audience measurement, meeting specific limitations on data scope, purpose, retention, and cross-site tracking. Functional and essential cookies are exempt from consent requirements.",
      "color": "orange"
    },
    {
      country: "Italy",
      code: "IT", // ISO 3166-1 alpha-2 code for Italy
      legislation:
        "Italian Data Protection Code (Legislative Decree No. 196/2003), amended by Legislative Decrees No. 69/2012 and No. 101/2018; Garante's Guidelines on Cookies and Other Tracking Tools (July 10, 2021)",
      authority: "Italian Data Protection Authority (Garante per la protezione dei dati personali)",
      approach:
        "First-party and certain third-party analytics cookies used for aggregated statistics can be exempt from consent if data is anonymized and strict conditions are met. Profiling and marketing cookies always require prior consent.",
      color: "orange", // Color for map visualization
    },    
    {
      "country": "Sweden",
      "code": "SE",
      "legislation": "Electronic Communications Act (EkomLag, 2003:389)",
      "authority": "Swedish Post and Telecom Authority (PTS)",
      "approach": "Consent is generally required for analytics cookies unless they are minimal in scope, fully anonymized, and thus have negligible privacy impact. Essential cookies related to user-requested services are exempt from consent requirements.",
      "color": "orange"
    },
    {
      "country": "Denmark",
      "code": "DK",
      "legislation": "Danish Executive Order on Cookies, Danish Marketing Practices Act, Danish Data Protection Act",
      "authority": "Danish Data Protection Authority (Datatilsynet)",
      "approach": "Informed consent is required for non-essential cookies, with exemptions for technical necessity and user-requested service provision. Analytics can meet exemption criteria if they ensure privacy through measures like anonymization.",
      "color": "orange"
    },
    {
      "country": "Finland",
      "code": "FI",
      "legislation": "Information Society Code (917/2014)",
      "authority": "Finnish Transport and Communications Agency (Traficom)",
      "approach": "Consent is generally required for storing cookies unless they are strictly necessary for communication or providing a service requested by the user. Exemptions for analytics may be allowed if data is anonymized and used solely for operational purposes.",
      color: "orange"
    },
    {
      "country": "Norway",
      "code": "NO",
      "legislation": "Norwegian Electronic Communications Act (Ekomloven), Section 2-7b",
      "authority": "Norwegian Data Protection Authority (Datatilsynet)",
      "approach": "Strict consent requirements for cookies usage including analytics. Exemptions are narrow, usually requiring consent unless necessary for the service operation. Analytics often require consent unless anonymized and strictly necessary for service provision.",
      color: "red",
    },
    {
      "country": "Austria",
      "code": "AT",
      "legislation": "Telecommunications Act 2021 (TKG 2021) and Data Protection Act (DSG)",
      "authority": "Austrian Data Protection Authority (DSB)",
      "approach": "Prior consent is required for non-essential cookies, including analytics, unless they are fully anonymized and aggregated. Essential cookies are exempt from consent requirements.",
      "color": "orange"
    },
    {
      "country": "Poland",
      "code": "PL",
      "legislation": "Telecommunications Law and Act on Providing Services by Electronic Means",
      "authority": "President of the Personal Data Protection Office (UODO)",
      "approach": "Prior consent is required for analytical cookies, except when they are strictly necessary for the service explicitly requested by the user or are anonymized to a degree they cannot be traced back to individuals. Essential cookies are exempt from consent requirements.",
      color: "red"
    },
    {
      "country": "Portugal",
      "code": "PT",
      "legislation": "Law No. 41/2004 as amended by Law No. 46/2012",
      "authority": "Comissão Nacional de Proteção de Dados (CNPD)",
      "approach": "Prior consent is required for all non-essential cookies, including analytical cookies, unless data is wholly anonymized or necessary for service provision. CNPD aligns with EU guidelines, requiring informed consent except for narrowly defined exemptions.",
      "color": "orange"
    },
    {
      "country": "Ireland",
      "code": "IE",
      "legislation": "European Communities (Electronic Communications Networks and Services) (Privacy and Electronic Communications) Regulations 2011",
      "authority": "Data Protection Commission (DPC)",
      "approach": "Analytical cookies require prior consent. The DPC emphasizes that implied consent is insufficient. Strictly necessary cookies and those solely for the transmission of a communication are exempt from consent requirements.",
      "color": "red"
    },
    {
      "country": "Greece",
      "code": "GR",
      "legislation": "Law 3471/2006 and Law 4624/2019",
      "authority": "Hellenic Data Protection Authority (HDPA)",
      "approach": "Prior consent is required for placing analytical cookies. Emphasizes transparency and clear user information. Essential cookies are exempt from consent requirements.",
      "color": "red"
    },
    {
      "country": "Czech Republic",
      "code": "CZ",
      "legislation": "Act No. 127/2005 Coll., on Electronic Communications",
      "authority": "The Office for Personal Data Protection (ÚOOÚ)",
      "approach": "Prior consent is required for storing or accessing information on user devices, with exceptions for technical necessity and transmission of communication. Analytics generally require consent unless strictly necessary for service provision.",
      color: "red"
    },
    {
      "country": "Hungary",
      "code": "HU",
      "legislation": "Act C of 2003 on Electronic Communications",
      "authority": "Hungarian National Authority for Data Protection and Freedom of Information (NAIH)",
      "approach": "Consent is required for analytical cookies, as they are considered non-essential and do not fall under strictly necessary exemptions. Emphasis is placed on obtaining informed user consent through mechanisms like cookie banners, with guidance from the NAIH.",
      color: "red"
    },
    {
      "country": "Luxembourg",
      "code": "LU",
      "legislation": "Amended Law of 30 May 2005 on specific provisions regarding privacy in electronic communications",
      "authority": "Commission Nationale pour la Protection des Données (CNPD)",
      "approach": "Prior consent is required for analytical cookies unless they are strictly necessary for the service explicitly requested by the user. Technical cookies essential for electronic communication or service provision are exempt from consent requirements.",
      color: "red"
    },
    {
      "country": "Slovenia",
      "code": "SI",
      "legislation": "Zakon o elektronskih komunikacijah (ZEKom-1)",
      "authority": "Informacijski pooblaščenec",
      "approach": "Explicit consent is required for all cookies except those that are strictly necessary for the service functionality. Analytics cookies require consent unless they can be anonymized to qualify for an exemption.",
      color: "red"
    },
    {
      "country": "Estonia",
      "code": "EE",
      "legislation": "Electronic Communications Act",
      "authority": "Data Protection Inspectorate (DPI)",
      "approach": "Prior consent is required for analytics cookies as they are usually not considered strictly necessary. The exemptions apply to cookies necessary for the transmission of communications or explicitly requested services.",
      color: "red"
    },
    {
      "country": "Latvia",
      "code": "LV",
      "legislation": "Electronic Communications Law",
      "authority": "Data State Inspectorate (Datu valsts inspekcija - DVI)",
      "approach": "Prior consent is required for analytical cookies unless they are strictly necessary for providing a service requested by the user. Functional cookies may require consideration under necessity interpretation.",
      color: "orange"
    },
    {
      "country": "Lithuania",
      "code": "LT",
      "legislation": "Law on Electronic Communications",
      "authority": "State Data Protection Inspectorate (SDPI)",
      "approach": "Prior consent is required for analytical cookies. Exceptions exist for cookies necessary for providing an information society service explicitly requested by the user. Transparency and clear information are mandatory.",
      color: "red"
    },
    {
      "country": "Slovakia",
      "code": "SK",
      "legislation": "Act No. 351/2011 Coll. on Electronic Communications",
      "authority": "Office for Personal Data Protection (Úrad na ochranu osobných údajov Slovenskej republiky)",
      "approach": "Requires prior consent for non-essential cookies, including analytical cookies, unless implemented with measures aligning with privacy principles such as anonymization.",
      "color": "red"
    },
    {
      "country": "Malta",
      "code": "MT",
      "legislation": "Data Protection Act, incorporating the ePrivacy Directive requirements",
      "authority": "Office of the Information and Data Protection Commissioner (IDPC)",
      "approach": "Prior consent required for most cookies, including analytical cookies, unless they are strictly necessary for the service requested by the user. Transparency and clear user information are mandatory.",
      "color": "red"
    },
    {
      "country": "Cyprus",
      "code": "CY",
      "legislation": "Law on Electronic Communications and Postal Services, aligned with ePrivacy Directive",
      "authority": "Office of the Commissioner for Personal Data Protection",
      "approach": "Consent is required for analytics cookies unless anonymization reduces privacy risks. Exemptions exist for cookies strictly necessary for service provision requested by the user.",
      color: "red"
    },
    {
      "country": "Iceland",
      "code": "IS",
      "legislation": "Implementation of the ePrivacy Directive aligned with GDPR",
      "authority": "Icelandic Data Protection Authority (Persónuvernd)",
      "approach": "Analytical cookies require consent. Guidelines emphasize transparency and active user consent. Strictly necessary cookies for services explicitly requested by the user are exempt from consent requirements.",
      color: "red"
    },
    {
      "country": "Liechtenstein",
      "code": "LI",
      "legislation": "Telecommunications Act and Data Protection Act, aligned with the ePrivacy Directive",
      "authority": "Datenschutzstelle (DSS)",
      "approach": "Generally requires consent for analytical cookies unless strictly necessary for the service requested by the user. Emphasizes necessity and proportionality of data collection.",
      color: "red"
    },
    {
      "country": "Croatia",
      "code": "HR",
      "legislation": "Electronic Communications Act, aligned with the ePrivacy Directive, and the Data Protection Act",
      "authority": "Agencija za zaštitu osobnih podataka (AZOP)",
      "approach": "Prior consent is required for analytical cookies. However, anonymizing IP addresses and not sharing analytical data further might help mitigate privacy concerns. Users must be provided with transparent information and the ability to opt-out.",
      "color": "red"
    },
    {
      "country": "Romania",
      "code": "RO",
      "legislation": "Law No. 506/2004 concerning the processing of personal data and the protection of privacy in the electronic communications sector",
      "authority": "Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)",
      "approach": "Requires prior consent for analytical cookies. Emphasizes active user action for valid consent. No blanket exemption for analytics or audience measurement cookies, as they are not considered strictly necessary.",
      color: "red"
    },
    {
      "country": "Bulgaria",
      "code": "BG",
      "legislation": "Electronic Communications Act, adapted to ePrivacy Directive",
      "authority": "Commission for Personal Data Protection (CPDP)",
      "approach": "Prior consent is required for analytics cookies, as they are generally not considered strictly necessary. Exemptions exist for strictly necessary cookies vital for service delivery. Transparency and clear user information are essential.",
      color: "red"
    },
  ];
  