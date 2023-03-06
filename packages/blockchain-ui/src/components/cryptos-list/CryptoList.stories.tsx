import { listOfCryptos } from "./CryptoList";

export default {
  title: "General/Crypto Icons List",

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => {
  const renderIcons = () => {
    return Object.keys(listOfCryptos).map((key) => {
      const Icon = listOfCryptos[key].icon;
      return (
        <div
          style={{
            backgroundColor: "#fff",
            width: 100,
            height: 100,
            borderRadius: 4,
            marginRight: 10,
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "50%" }}>
            <Icon />
          </div>
          <span style={{ fontSize: 10 }}>{listOfCryptos[key].name}</span>
        </div>
      );
    });
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* <div style={{ backgroundColor: "#fff", height: 50, width: 100, marginRight: 10 }}>
        {Object.keys(listOfCryptos).length}
      </div> */}
      {renderIcons()}
    </div>
  );
};

export const CryptoIconsList = Template.bind({});
