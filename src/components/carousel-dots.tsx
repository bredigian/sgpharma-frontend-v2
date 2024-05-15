import { cn } from '@/lib/utils';

type Props = {
  data: any[];
  selectedIndex: number;
  onDotClick: (index: number) => void;
  styles?: string;
};

export default function CarouselDots({
  data,
  selectedIndex,
  onDotClick,
  styles,
}: Props) {
  return (
    <div
      className={cn(
        'embla__dots flex w-fit items-center justify-center gap-2',
        styles ?? '',
      )}
    >
      {data.map((_, index) => (
        <button
          key={index}
          className={cn(
            'h-5 rounded-full duration-300 ease-in-out',
            index === selectedIndex ? 'w-16 bg-blue-400' : 'w-5 bg-blue-200',
          )}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
}
