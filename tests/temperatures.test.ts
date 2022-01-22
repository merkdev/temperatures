import TempConverter from "../src";

describe("Convert: 3C° to F", () => {
  it("should return 37.4 via function", () => {
    expect(TempConverter.CToF(3)).toBe(37.4);
  });

  it("should return 37.4 via convert", () => {
    expect(TempConverter.convert({
      from: "C",
      to: "F",
      value: 3
    })).toBe(37.4);
  });
});

describe("Convert: 3C° to K", () => {
  it("should return 276.15 via function", () => {
    expect(TempConverter.CToK(3)).toBe(276.15);
  });

  it("should return 276.15 via convert", () => {
    expect(TempConverter.convert({
      from: "C",
      to: "K",
      value: 3
    })).toBe(276.15);
  });
});

describe("Convert: 3F° to C", () => {
  it("should return -16.11111111111111 via function", () => {
    expect(TempConverter.FToC(3)).toBe(-16.11111111111111);
  });

  it("should return -16.11111111111111 via convert", () => {
    expect(TempConverter.convert({
      from: "F",
      to: "C",
      value: 3
    })).toBe(-16.11111111111111);
  });
});

describe("Convert: 3F° to K", () => {
  it("should return 257.0388888888889 via function", () => {
    expect(TempConverter.FToK(3)).toBe(257.0388888888889);
  });

  it("should return 257.0388888888889 via convert", () => {
    expect(TempConverter.convert({
      from: "F",
      to: "K",
      value: 3
    })).toBe(257.0388888888889);
  });
});

describe("Convert: 3K° to C", () => {
  it("should return -270.15 via function", () => {
    expect(TempConverter.KToC(3)).toBe(-270.15);
  });

  it("should return -270.15 via convert", () => {
    expect(TempConverter.convert({
      from: "K",
      to: "C",
      value: 3
    })).toBe(-270.15);
  });
});

describe("Convert: 3K° to F", () => {
  it("should return -454.27 via function", () => {
    expect(TempConverter.KToF(3)).toBe(-454.27);
  });

  it("should return -454.27 via convert", () => {
    expect(TempConverter.convert({
      from: "K",
      to: "F",
      value: 3
    })).toBe(-454.27);
  });
});