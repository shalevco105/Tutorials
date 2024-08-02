import crypto from 'crypto';

const algorithm = 'aes-256-cbc'; 
const keyString = 'KEY'; 
const keyLength = 32;

const key = crypto.createHash('sha256').update(keyString).digest(); // Ensure key is 32 bytes

const generateIV = () => crypto.randomBytes(16);

export function encrypt(text: string): string {
  const iv = generateIV(); // Generate a new IV for each encryption
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`; // Return IV and encrypted text
}

export function decrypt(encryptedText: string): string {
  const [ivHex, encrypted] = encryptedText.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
