const CustomCursor = ({
  activeDotPosition,
}: {
  activeDotPosition: { x: number; y: number } | null;
}) => {
  if (!activeDotPosition) return null;

  const { x, y } = activeDotPosition;

  return (
    <svg>
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y + 25}
        stroke="#FFC355"
        strokeDasharray="3 3"
        strokeWidth={1}
      />
    </svg>
  );
};

export default CustomCursor;
