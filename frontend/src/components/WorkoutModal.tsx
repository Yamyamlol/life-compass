import { useState, useEffect } from "react";
import { X } from "lucide-react";

const WorkoutModal = ({ workout, isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add small delay before showing modal for animation
    if (isOpen) {
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    // Add delay to allow animation to complete before removing from DOM
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`bg-white rounded-xl max-w-md w-full mx-4 transition-all duration-300 transform ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold text-myfit-700">
            {workout.name}
          </h3>
          <button
            onClick={handleClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-myfit-50 px-4 py-2 rounded-lg mb-4">
            <p className="text-myfit-600 font-medium">{workout.targetGroup}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-500">Sets</p>
              <p className="text-lg font-semibold text-myfit-600">
                {workout.sets}
              </p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-500">Reps</p>
              <p className="text-lg font-semibold text-myfit-600">
                {workout.reps}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-myfit-700 mb-2">How to perform</h4>
            <p className="text-gray-700">
              {workout.howTo || workout.instructions}
            </p>
          </div>
        </div>

        <div className="p-4 border-t flex justify-end">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-myfit-500 text-white rounded-lg hover:bg-myfit-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutModal;
