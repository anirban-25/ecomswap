import React from "react";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";

export default function Countries() {
  const { countries } = useCountries();

  if (!countries) {
    return <div>Loading...</div>; // Add a loading state in case countries are not loaded yet
  }

  return (
    <div className="w-72">
      <Select size="lg" label="Select Country">
        {countries.map((country) => (
          <Option key={country.code} value={country.name} className="flex items-center gap-2">
            <img
              src={country.flags.svg}
              alt={country.name}
              className="h-5 w-5 rounded-full object-cover"
            />
            {country.name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
