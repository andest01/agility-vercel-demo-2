interface InlineErrorPropertiess {
  /**
   * The error message to display
   */
  message: string;
}

/**
 * A component to display an error message and optionally expanda a ContentItem object
 * @param {InlineErrorPropertiess} props
 * @returns
 */
export default function InlineError({ message }: InlineErrorPropertiess) {
  return (
    <section className="relative my-6">
      <div className="mx-auto max-w-2xl rounded-md border border-gray-300 bg-gray-100 px-8 py-6">
        <div className="text-base font-medium">{message}</div>
      </div>
    </section>
  );
}
