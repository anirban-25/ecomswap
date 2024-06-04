const NameShorten = ({ name }) => {
    // Check if the length of the name is greater than 7
    if (name.length > 8) {
      // Shorten the name to 7 characters and append three dots
      name = name.substring(0, 8) + '...';
    }
  
    // Render the shortened name
    return <span>{name}</span>;
  };
  
  export default NameShorten;
  