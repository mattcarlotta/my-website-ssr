/* eslint-disable react/prop-types */
import { act } from "react-dom/test-utils";
import Modal from "../index";

const image = new global.Image();
image.src =
  "data:image/png;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=";

const Image = ({ alt, handleImageLoaded, handleImageRef, src }) => (
  <img
    ref={handleImageRef}
    src={src}
    alt={alt}
    onLoad={handleImageLoaded}
    onError={handleImageLoaded}
  />
);

const onClick = jest.fn();

const initProps = {
  children: <h1>Example Modal Content</h1>,
  isOpen: false,
  onClick,
};

const wrapper = mount(
  <Modal {...initProps}>
    <Image src={image} alt="example" />
  </Modal>,
);

describe("Modal", () => {
  it("initially renders nothing", () => {
    expect(wrapper.find("ModalContainer").exists()).toBeFalsy();
  });

  it("renders a modal with some sample content without errors", async () => {
    wrapper.setProps({ isOpen: true });

    await act(async () => {
      wrapper.find("img").props().onLoad();
      await flushPromises();
      wrapper.update();

      expect(wrapper.find("ModalContainer").exists()).toBeTruthy();
      expect(wrapper.find("ModalContent").props().isLoaded).toBeTruthy();
    });
  });

  it("calls a passed in 'onClick' prop function", () => {
    wrapper.setProps({ onClick });

    wrapper.find("button").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("closes the modal", () => {
    wrapper.setProps({ isOpen: false });
    expect(wrapper.find("ModalContainer").exists()).toBeFalsy();
  });
});
/* eslint-enable react/prop-types */
