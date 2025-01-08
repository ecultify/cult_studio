interface EmailData {
  name: string;
  email: string;
  phone: string;
}

export async function sendEmail(data: EmailData): Promise<void> {
  // Implement email sending functionality here
  // This is a placeholder that simulates an API call
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}