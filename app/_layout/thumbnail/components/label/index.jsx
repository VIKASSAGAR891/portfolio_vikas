/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailLabel({ children }) {
  return (
    <div
      style={{
        paddingInlineStart: 'clamp(2.5em, 8vw, 8em)',
      }}
    >
      <h5 className='text-lg font-medium text-foreground'>{children}</h5>
    </div>
  );
}
