function generateCustomString(): string {
    const now = new Date();
    const milliseconds = now.getMilliseconds().toString().padStart(5, '0');
    const datePart = milliseconds;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomLetter1 = letters[Math.floor(Math.random() * letters.length)];
    const randomLetter2 = letters[Math.floor(Math.random() * letters.length)];
    const customString = (datePart + randomLetter1 + randomLetter2).slice(0, 10);

    return customString;
}

const customNumber: string = generateCustomString();

export default customNumber;
