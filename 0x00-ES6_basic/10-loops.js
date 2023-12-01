export default function appendToEachArrayValue(array, appendString) {
  const End = [];
  for (const idx of array) {
    End.push(`${appendString}${idx}`);
  }

  return End;
}
