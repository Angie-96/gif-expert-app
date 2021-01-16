import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("GifGridItem Tests", () => {
  const title = "Example";
  const url = "https://localhost:3000/algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should show GifGridItem correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a title paragraph", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("img tag should have an url and alt", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("should have the animate__fadeIn class", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
