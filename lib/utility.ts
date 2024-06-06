class ErrorHandler extends Error {
  constructor(message: any) {
    super(message);
    this.message = message;
  }
}
export { ErrorHandler };
