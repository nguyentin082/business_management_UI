import { useState, useEffect, useRef, useCallback } from 'react';

interface AlertSuccessProps {
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
    title: string;
    content: string;
}

export default function AlertSuccess({
    isVisible,
    setIsVisible,
    title,
    content,
}: AlertSuccessProps) {
    // HOOKS
    const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
    const isMounted = useRef<boolean>(true); // Track mounted status

    // Effect to handle auto close
    useEffect(() => {
        if (isVisible) {
            setIsFadingOut(false); // Reset fading out state when visible
            const timeoutId = setTimeout(() => {
                handleClose();
            }, 5000); // Auto close after 5 seconds
            console.log(timeoutId + ' => set');

            return () => {
                clearTimeout(timeoutId); // Cleanup timeout
                console.log(timeoutId + ' => clear');
            };
        }
    }, [isVisible]);

    // Handle close functionality
    const handleClose = useCallback(() => {
        if (!isFadingOut) {
            // Prevent multiple calls
            setIsFadingOut(true);
            setTimeout(() => {
                if (isMounted.current) {
                    setIsVisible(false);
                }
            }, 500); // Wait for the fade-out duration
        }
    }, [setIsVisible, isFadingOut]);

    // RENDER
    return (
        <div
            className={`absolute top-5 right-5 w-96 rounded-md border-l-4 border-green-500 bg-green-50 md:max-w-2xl md:mx-auto md:px-8 transition-opacity duration-500 ease-out ${
                isFadingOut
                    ? 'opacity-0' // When fading out
                    : isVisible // When visible, apply fade-in
                    ? 'opacity-100'
                    : 'opacity-0' // If not visible
            }`}
            style={{ pointerEvents: isFadingOut ? 'none' : 'auto' }} // Prevent clicks while fading out
        >
            <div className="flex justify-between py-3">
                <div className="flex">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 rounded-full text-green-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="self-center ml-3">
                        <span className="text-green-600 font-semibold">
                            {title}
                        </span>
                        <p className="text-green-600 mt-1">{content}</p>
                    </div>
                </div>
                <button
                    className="self-start text-green-500"
                    onClick={handleClose} // Hide when button is clicked
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
