# Cookie Rules Map

This project is a Next.js application that visualizes the cookie regulations for analytical cookies across European Economic Area (EEA) countries.

## Overview

The Cookie Rules Map provides an interactive map of Europe, allowing users to quickly understand the different approaches to analytical cookie regulations in various EEA countries. It offers detailed information about each country's legislation, supervisory authority, and specific approach to analytical cookies.

## Features

- Interactive map of Europe with color-coded countries
- Detailed country-specific information on cookie regulations
- Responsive design for both desktop and mobile devices
- Dark mode support

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains the main application pages and layouts
- `components/`: Reusable React components
- `lib/`: Utility functions and data
- `public/`: Static assets, including the Europe GeoJSON file

## Key Components

- `CountryMap`: The main component rendering the interactive map
- `Legend`: Displays the color legend for the map
- `CountryDetail`: Shows detailed information for a selected country

## Data Source

The country data used in this project is stored in `lib/countriesData.ts`.

## Styling

This project uses Tailwind CSS for styling, with a custom theme defined in `tailwind.config.ts`.

## Dependencies

Key dependencies include:

- Next.js
- React
- react-simple-maps
- Radix UI components
- Tailwind CSS

For a full list of dependencies, refer to the `package.json` file.

## Contributing

Contributions to improve the project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

[Add your chosen license here]

## Acknowledgments

- European Data Protection Board (EDPB) guidelines
- National data protection authorities of EEA countries
- ChatGPT for research assistance

Please note that while we've used ChatGPT to assist in our research, the information provided may not be exhaustive or up-to-date. We recommend verifying critical details with official sources or legal professionals before making any decisions based on this information.
