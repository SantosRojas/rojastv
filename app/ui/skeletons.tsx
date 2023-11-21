// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer}relative rounded-xl bg-gray-200 p-2 shadow-sm w-full flex justify-center items-center `}
    >
      <div className="h-20 w-20 rounded-full bg-gray-400" />
    </div>
  );
}

export function ChannelSkeleton() {
  return (
    <div
      className={`${shimmer} relative rounded-xl bg-violet-400 w-full h-full flex justify-center items-center `}
    >
    </div>
  );
}
