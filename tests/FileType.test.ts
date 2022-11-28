import { fileType } from "../src/index";

test("image.png", (): void => {
    expect(fileType("image.png")).toBe("png");
});