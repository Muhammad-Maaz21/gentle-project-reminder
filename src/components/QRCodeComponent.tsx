
import { useEffect, useRef } from "react";

interface QRCodeComponentProps {
  eventId: string;
  userId?: string;
}

const QRCodeComponent = ({ eventId, userId = "user123" }: QRCodeComponentProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Simple QR code placeholder - in a real app, you'd use a QR code library
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create a simple pattern as QR code placeholder
    const size = 200;
    canvas.width = size;
    canvas.height = size;

    // White background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    // Black pattern (mock QR code)
    ctx.fillStyle = "#000000";
    const blockSize = 10;
    const qrData = `EVENT:${eventId}-USER:${userId}`;
    
    // Create a simple pattern based on the data
    for (let y = 0; y < size; y += blockSize) {
      for (let x = 0; x < size; x += blockSize) {
        const index = (y / blockSize) * (size / blockSize) + (x / blockSize);
        if ((index + qrData.length) % 3 === 0) {
          ctx.fillRect(x, y, blockSize, blockSize);
        }
      }
    }

    // Add corner markers
    const markerSize = blockSize * 3;
    ctx.fillRect(0, 0, markerSize, markerSize);
    ctx.fillRect(size - markerSize, 0, markerSize, markerSize);
    ctx.fillRect(0, size - markerSize, markerSize, markerSize);

    // White centers for corner markers
    ctx.fillStyle = "#ffffff";
    const centerSize = blockSize;
    ctx.fillRect(blockSize, blockSize, centerSize, centerSize);
    ctx.fillRect(size - markerSize + blockSize, blockSize, centerSize, centerSize);
    ctx.fillRect(blockSize, size - markerSize + blockSize, centerSize, centerSize);

  }, [eventId, userId]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <canvas
        ref={canvasRef}
        className="border-2 border-gray-200 rounded-lg"
        style={{ maxWidth: "200px", height: "auto" }}
      />
      <div className="text-center">
        <p className="text-sm font-medium">Event ID: {eventId}</p>
        <p className="text-xs text-muted-foreground">User ID: {userId}</p>
      </div>
    </div>
  );
};

export default QRCodeComponent;
