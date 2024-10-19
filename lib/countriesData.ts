export const countriesData = [
    {
      country: "Belgium",
      code: "BE", // ISO 3166-1 alpha-2 code for Belgium
      legislation: "Law of 13 June 2005 on electronic communications",
      authority: "Data Protection Authority (GBA)",
      approach:
        "Requires prior consent for non-essential cookies, including analytical cookies. No exception for low-impact analytical cookies.",
      color: "red", // Color for map visualization
    },
    {
      country: "Germany",
      code: "DE", // ISO code for Germany
      legislation: "Telecommunications Act (TKG) and Telemedia Act (TMG), updated by TTDSG in 2021",
      authority: "Federal and regional data protection authorities",
      approach:
        "Analytical cookies require consent unless data is fully anonymized. Pseudonymization is insufficient for exemption.",
      color: "red",
    },
    {
      country: "France",
      code: "FR", // ISO code for France
      legislation: "Law 'Informatique et Libertés', adapted to the GDPR",
      authority: "Commission Nationale de l'Informatique et des Libertés (CNIL)",
      approach:
        "Prior consent is required for analytical cookies unless they are anonymous and have no impact on user privacy.",
      color: "red",
    },
    {
      country: "Netherlands",
      code: "NL", // ISO code for Netherlands
      legislation: "Telecommunications Act, Article 11.7a",
      authority: "Dutch Data Protection Authority (Autoriteit Persoonsgegevens) and Authority for Consumers & Markets (ACM)",
      approach:
        "Analytical cookies with low impact on privacy can be placed without consent under specific conditions.",
      color: "orange",
    },
    {
      country: "Spain",
      code: "ES", // ISO code for Spain
      legislation: "Law 34/2002 (LSSI) and Organic Law 3/2018 (LOPDGDD)",
      authority: "Spanish Data Protection Agency (AEPD)",
      approach:
        "Requires prior informed consent for the use of analytical cookies. No exceptions for low-impact cookies.",
      color: "red",
    },
    {
      country: "Italy",
      code: "IT", // ISO code for Italy
      legislation: "Legislative Decree No. 196/2003, amended by Decree No. 101/2018",
      authority: "Italian Data Protection Authority (Garante)",
      approach:
        "First-party analytical cookies used for aggregate statistics can be used without consent. Third-party analytical cookies generally require consent.",
      color: "orange",
    },
    {
      country: "Sweden",
      code: "SE", // ISO code for Sweden
      legislation: "Electronic Communications Act (2003:389)",
      authority: "Swedish Post and Telecom Authority (PTS) and Swedish Authority for Privacy Protection (IMY)",
      approach:
        "Requires prior consent for placing analytical cookies. Implicit consent is insufficient; active user action is required.",
      color: "red",
    },
    {
      country: "Denmark",
      code: "DK", // ISO code for Denmark
      legislation: "Executive Order on Information and Consent Required in Case of Storing or Accessing Information in End-User Terminal Equipment",
      authority: "Danish Data Protection Agency (Datatilsynet)",
      approach:
        "Strict compliance with consent requirements for all non-essential cookies, including analytical cookies.",
      color: "red",
    },
    {
      country: "Finland",
      code: "FI", // ISO code for Finland
      legislation: "Information Society Code (917/2014)",
      authority: "Finnish Transport and Communications Agency (Traficom) and Data Protection Ombudsman",
      approach:
        "Analytical cookies require prior consent unless they are strictly necessary for the service. Use of anonymized data may be allowed without consent under specific conditions.",
      color: "red",
    },
    {
      country: "Norway",
      code: "NO", // ISO code for Norway
      legislation: "Electronic Communications Act, Section 2-7b",
      authority: "Norwegian Communications Authority (Nkom) and Norwegian Data Protection Authority (Datatilsynet)",
      approach:
        "Requires informed consent for placing analytical cookies. Emphasizes transparency and user control.",
      color: "red",
    },
    {
      country: "Austria",
      code: "AT", // ISO code for Austria
      legislation: "Telecommunications Act (TKG 2003), amended in 2021",
      authority: "Austrian Data Protection Authority (DSB)",
      approach:
        "Analytical cookies require consent unless the data is fully anonymized. Pseudonymization is insufficient for exemption.",
      color: "red",
    },
    {
      country: "Poland",
      code: "PL", // ISO code for Poland
      legislation: "Telecommunications Act of 16 July 2004",
      authority: "Office of Electronic Communications (UKE) and Personal Data Protection Office (UODO)",
      approach:
        "Requires informed consent for the use of analytical cookies. Transparency and clear user information are mandatory.",
      color: "red",
    },
    {
      country: "Portugal",
      code: "PT", // ISO code for Portugal
      legislation: "Law No. 41/2004 and Law No. 46/2012",
      authority: "Portuguese Data Protection Authority (CNPD)",
      approach:
        "Prior consent is required for all non-essential cookies, including analytical cookies. No specific exceptions.",
      color: "red",
    },
    {
      country: "Ireland",
      code: "IE", // ISO code for Ireland
      legislation: "ePrivacy Regulations 2011 (S.I. No. 336 of 2011)",
      authority: "Data Protection Commission (DPC)",
      approach:
        "Analytical cookies require prior consent. The DPC emphasizes that implied consent is insufficient.",
      color: "red",
    },
    {
      country: "Greece",
      code: "GR", // ISO code for Greece
      legislation: "Law 3471/2006, adjusted for GDPR compliance",
      authority: "Hellenic Data Protection Authority (HDPA)",
      approach:
        "Prior consent is required for placing analytical cookies. Emphasizes transparency and clear user information.",
      color: "red",
    },
    {
      country: "Czech Republic",
      code: "CZ", // ISO code for Czech Republic
      legislation: "Act No. 127/2005 Coll., on Electronic Communications",
      authority: "Czech Telecommunication Office and Office for Personal Data Protection (ÚOOÚ)",
      approach:
        "As of January 2022, switched to opt-in; analytical cookies now require prior consent.",
      color: "red",
    },
    {
      country: "Hungary",
      code: "HU", // ISO code for Hungary
      legislation: "Act C of 2003 on Electronic Communications",
      authority: "National Authority for Data Protection and Freedom of Information (NAIH)",
      approach:
        "Analytical cookies require prior consent. Emphasizes transparency and active user action for consent.",
      color: "red",
    },
    {
      country: "Luxembourg",
      code: "LU", // ISO code for Luxembourg
      legislation: "Law of 30 May 2005, adjusted for GDPR compliance",
      authority: "National Commission for Data Protection (CNPD)",
      approach:
        "Requires informed consent for the use of analytical cookies. No specific exceptions for low-risk analytical cookies.",
      color: "red",
    },
    {
      country: "Slovenia",
      code: "SI", // ISO code for Slovenia
      legislation: "Electronic Communications Act (ZEKom-1)",
      authority: "Information Commissioner (IP RS)",
      approach:
        "One of the strictest regulations; prior active consent is required for all cookies, including analytical.",
      color: "red",
    },
    {
      country: "Estonia",
      code: "EE", // ISO code for Estonia
      legislation: "Electronic Communications Act",
      authority: "Estonian Data Protection Inspectorate",
      approach:
        "Analytical cookies require prior consent. Emphasizes transparency about use and purpose.",
      color: "red",
    },
    {
      country: "Latvia",
      code: "LV", // ISO code for Latvia
      legislation: "Electronic Communications Law",
      authority: "Data State Inspectorate (DVI)",
      approach:
        "Requires informed consent for the use of analytical cookies. Active user action is necessary.",
      color: "red",
    },
    {
      country: "Lithuania",
      code: "LT", // ISO code for Lithuania
      legislation: "Law on Electronic Communications",
      authority: "State Data Protection Inspectorate (VDAI)",
      approach:
        "Analytical cookies require prior consent. Transparency and clear information are mandatory.",
      color: "red",
    },
    {
      country: "Slovakia",
      code: "SK", // ISO code for Slovakia
      legislation: "Act No. 351/2011 Coll. on Electronic Communications",
      authority: "Office for Personal Data Protection of the Slovak Republic",
      approach:
        "Requires prior consent for non-essential cookies, including analytical cookies.",
      color: "red",
    },
    {
      country: "Malta",
      code: "MT", // ISO code for Malta
      legislation: "Electronic Communications (Regulation) Act",
      authority: "Office of the Information and Data Protection Commissioner (IDPC)",
      approach:
        "Analytical cookies require prior consent. Transparency and clear user information are mandatory.",
      color: "red",
    },
    {
      country: "Cyprus",
      code: "CY", // ISO code for Cyprus
      legislation: "Regulation of Electronic Communications and Postal Services Law 112(I)/2004",
      authority: "Office of the Commissioner for Personal Data Protection",
      approach:
        "Requires prior consent for analytical cookies. Emphasizes transparency and user control.",
      color: "red",
    },
    {
      country: "Iceland",
      code: "IS", // ISO code for Iceland
      legislation: "Electronic Communications Act No. 81/2003",
      authority: "Icelandic Data Protection Authority (Persónuvernd)",
      approach:
        "Analytical cookies require consent. Guidelines emphasize transparency and active user consent.",
      color: "red",
    },
    {
      country: "Liechtenstein",
      code: "LI", // ISO code for Liechtenstein
      legislation: "Telecommunications Act (KomG)",
      authority: "Data Protection Authority Liechtenstein",
      approach:
        "Requires consent for analytical cookies. Generally follows the Swiss approach, similar to EU rules.",
      color: "red",
    },
    {
      country: "Croatia",
      code: "HR", // ISO code for Croatia
      legislation: "Electronic Communications Act",
      authority: "Croatian Personal Data Protection Agency (AZOP)",
      approach:
        "Analytical cookies require prior consent. Transparency and clear information are mandatory.",
      color: "red",
    },
    {
      country: "Romania",
      code: "RO", // ISO code for Romania
      legislation: "Law No. 506/2004, amended by Law No. 235/2015",
      authority: "National Supervisory Authority for Personal Data Processing (ANSPDCP)",
      approach:
        "Requires prior consent for analytical cookies. Emphasizes active user action for valid consent.",
      color: "red",
    },
    {
      country: "Bulgaria",
      code: "BG", // ISO code for Bulgaria
      legislation: "Electronic Communications Act",
      authority: "Commission for Personal Data Protection (CPDP)",
      approach:
        "Analytical cookies require prior consent. Transparency and clear user information are essential.",
      color: "red",
    },
  ];
  