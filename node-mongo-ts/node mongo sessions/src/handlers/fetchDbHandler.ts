type DbOperation<T> = () => Promise<T>;

async function fetchDbHandler<T>(
  dbOperation: DbOperation<T>
): Promise<T | null> {
  try {
    const result = await dbOperation();
    return result;
  } catch (error) {
    console.error("Database operation failed:", error);
    return null;
  }
}

export default fetchDbHandler;
