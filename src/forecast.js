class Forecast {
  constructor() {
    this.advice = "https://api.adviceslip.com/advice";
  }

  async getAdvice() {
    const response = await fetch(this.advice),
      data = await response.json();

    return data.slip.advice;
  }

  async getAdviceID() {
    const response = await fetch(this.advice),
      data = await response.json();
    return data.slip.id;
  }
}
