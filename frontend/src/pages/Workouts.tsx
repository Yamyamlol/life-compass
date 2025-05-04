import { useState } from "react";
import Header from "@/components/Header";
import WorkoutModal from "@/components/WorkoutModal";
import Footer from "@/components/Footer";

const Workouts = () => {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const workouts = [
    {
      workoutCategories: [
        {
          category: "Strength",
          totalWorkouts: 24,
          workouts: [
            {
              name: "Bench Press",
              sets: 4,
              reps: "8-10",
              targetGroup: "Chest, Triceps",
              instructions:
                "Lie on a bench, grip the bar slightly wider than shoulders, lower to chest, then press up.",
            },
            {
              name: "Deadlift",
              sets: 3,
              reps: "5",
              targetGroup: "Back, Hamstrings",
              instructions:
                "Stand feet hip-width, grip bar, lift by driving through heels and keeping back straight.",
            },
            {
              name: "Squat",
              sets: 4,
              reps: "8",
              targetGroup: "Legs, Glutes",
              instructions:
                "Lower hips back and down, keep knees over toes, push through heels to stand.",
            },
            {
              name: "Overhead Press",
              sets: 3,
              reps: "10",
              targetGroup: "Shoulders, Triceps",
              instructions:
                "Press bar overhead while keeping core tight and elbows slightly in front.",
            },
            {
              name: "Barbell Row",
              sets: 3,
              reps: "8",
              targetGroup: "Back, Biceps",
              instructions:
                "Hinge at hips, pull bar toward abdomen, and control the movement down.",
            },
            {
              name: "Incline Dumbbell Press",
              sets: 3,
              reps: "10",
              targetGroup: "Upper Chest",
              instructions:
                "Lie on incline bench, press dumbbells up and lower slowly.",
            },
            {
              name: "Leg Press",
              sets: 4,
              reps: "12",
              targetGroup: "Legs",
              instructions:
                "Press platform away with feet shoulder-width apart, then return slowly.",
            },
            {
              name: "Lat Pulldown",
              sets: 3,
              reps: "10",
              targetGroup: "Back",
              instructions:
                "Pull bar to chest level while seated, control the release.",
            },
            {
              name: "Lunges",
              sets: 3,
              reps: "12 each leg",
              targetGroup: "Quads, Glutes",
              instructions:
                "Step forward and lower until both knees form 90°, push back up.",
            },
            {
              name: "Bicep Curl",
              sets: 3,
              reps: "12",
              targetGroup: "Biceps",
              instructions:
                "Curl weights while keeping elbows tucked and controlled tempo.",
            },
            {
              name: "Triceps Dip",
              sets: 3,
              reps: "10",
              targetGroup: "Triceps",
              instructions:
                "Lower body using arms on a dip bar, press back up.",
            },
            {
              name: "Calf Raise",
              sets: 4,
              reps: "15",
              targetGroup: "Calves",
              instructions:
                "Lift heels off ground, squeeze at top, lower slowly.",
            },
            {
              name: "Chest Fly",
              sets: 3,
              reps: "10",
              targetGroup: "Chest",
              instructions:
                "Open arms wide with dumbbells, then squeeze back to center.",
            },
            {
              name: "Hammer Curl",
              sets: 3,
              reps: "12",
              targetGroup: "Biceps",
              instructions:
                "Curl with palms facing inward, keeping elbows stable.",
            },
            {
              name: "Cable Row",
              sets: 3,
              reps: "10",
              targetGroup: "Back",
              instructions: "Pull handle to torso while keeping spine neutral.",
            },
            {
              name: "Front Squat",
              sets: 4,
              reps: "8",
              targetGroup: "Quads, Core",
              instructions:
                "Rest bar on shoulders, squat keeping chest upright.",
            },
            {
              name: "Romanian Deadlift",
              sets: 3,
              reps: "10",
              targetGroup: "Hamstrings",
              instructions:
                "Lower bar with slight knee bend, stretch hamstrings, return up.",
            },
            {
              name: "Chest Press Machine",
              sets: 3,
              reps: "12",
              targetGroup: "Chest",
              instructions: "Push handles away and return under control.",
            },
            {
              name: "Arnold Press",
              sets: 3,
              reps: "10",
              targetGroup: "Shoulders",
              instructions:
                "Start palms facing you, rotate and press overhead.",
            },
            {
              name: "Dumbbell Shrug",
              sets: 4,
              reps: "15",
              targetGroup: "Traps",
              instructions: "Raise shoulders to ears, squeeze, and release.",
            },
            {
              name: "Zercher Squat",
              sets: 3,
              reps: "6",
              targetGroup: "Legs, Core",
              instructions:
                "Hold bar in elbow crease, squat with upright torso.",
            },
            {
              name: "Face Pull",
              sets: 3,
              reps: "12",
              targetGroup: "Rear Delts",
              instructions: "Pull rope toward forehead keeping elbows high.",
            },
            {
              name: "Kettlebell Swing",
              sets: 3,
              reps: "15",
              targetGroup: "Glutes, Core",
              instructions:
                "Hinge hips, swing bell to shoulder height with power.",
            },
            {
              name: "Push-Up",
              sets: 3,
              reps: "15",
              targetGroup: "Chest, Triceps",
              instructions: "Lower chest to floor and push back up.",
            },
          ],
        },
        {
          category: "Cardio",
          totalWorkouts: 18,
          workouts: [
            {
              name: "Running",
              sets: 1,
              reps: "30 mins",
              targetGroup: "Full Body",
              instructions:
                "Run at a steady pace maintaining rhythmic breathing.",
            },
            {
              name: "Cycling",
              sets: 1,
              reps: "45 mins",
              targetGroup: "Legs, Heart",
              instructions:
                "Ride with moderate resistance and posture upright.",
            },
            {
              name: "Jump Rope",
              sets: 3,
              reps: "1 min",
              targetGroup: "Full Body",
              instructions:
                "Jump continuously over the rope with a smooth rhythm.",
            },
            {
              name: "Elliptical",
              sets: 1,
              reps: "20 mins",
              targetGroup: "Legs, Cardio",
              instructions:
                "Move arms and legs in a controlled elliptical motion.",
            },
            {
              name: "Stair Climber",
              sets: 1,
              reps: "15 mins",
              targetGroup: "Legs, Glutes",
              instructions: "Step at a moderate pace without locking knees.",
            },
            {
              name: "Rowing",
              sets: 1,
              reps: "2000m",
              targetGroup: "Full Body",
              instructions:
                "Push with legs, pull with arms, and repeat rhythmically.",
            },
            {
              name: "Swimming",
              sets: 1,
              reps: "30 mins",
              targetGroup: "Full Body",
              instructions: "Alternate strokes with consistent breathing.",
            },
            {
              name: "Hiking",
              sets: 1,
              reps: "60 mins",
              targetGroup: "Legs, Core",
              instructions: "Walk uphill with steady breathing and breaks.",
            },
            {
              name: "Dancing",
              sets: 1,
              reps: "20 mins",
              targetGroup: "Full Body",
              instructions: "Follow high-energy dance routines.",
            },
            {
              name: "High-Knees",
              sets: 3,
              reps: "30 sec",
              targetGroup: "Core, Legs",
              instructions: "Run in place, lifting knees above waist height.",
            },
            {
              name: "Butt Kicks",
              sets: 3,
              reps: "30 sec",
              targetGroup: "Legs",
              instructions: "Run in place while kicking heels to glutes.",
            },
            {
              name: "Box Jumps",
              sets: 3,
              reps: "10",
              targetGroup: "Legs, Core",
              instructions: "Jump onto a box, land softly and stand tall.",
            },
            {
              name: "Burpees",
              sets: 3,
              reps: "12",
              targetGroup: "Full Body",
              instructions: "Squat, kick back to plank, return and jump up.",
            },
            {
              name: "Sled Push",
              sets: 3,
              reps: "20m",
              targetGroup: "Legs, Core",
              instructions:
                "Push weighted sled over short distance with effort.",
            },
            {
              name: "Shadow Boxing",
              sets: 3,
              reps: "1 min",
              targetGroup: "Arms, Cardio",
              instructions: "Throw punches in the air with speed and movement.",
            },
            {
              name: "Battle Ropes",
              sets: 3,
              reps: "30 sec",
              targetGroup: "Arms, Core",
              instructions: "Wave ropes continuously with controlled power.",
            },
            {
              name: "Skaters",
              sets: 3,
              reps: "30 sec",
              targetGroup: "Legs, Balance",
              instructions: "Jump side-to-side with one leg behind.",
            },
            {
              name: "Mountain Climbers",
              sets: 3,
              reps: "40 sec",
              targetGroup: "Core, Legs",
              instructions: "Drive knees toward chest in plank position.",
            },
          ],
        },
        {
          category: "Yoga",
          totalWorkouts: 16,
          workouts: [
            {
              name: "Downward Dog",
              sets: 3,
              reps: "30 sec hold",
              targetGroup: "Hamstrings, Back",
              instructions: "Form an inverted V, press heels down and hold.",
            },
            {
              name: "Cat-Cow Stretch",
              sets: 3,
              reps: "5",
              targetGroup: "Spine",
              instructions: "Alternate arching and rounding the back slowly.",
            },
            {
              name: "Child’s Pose",
              sets: 3,
              reps: "30 sec hold",
              targetGroup: "Back, Hips",
              instructions: "Sit on heels, stretch arms forward and rest.",
            },
            {
              name: "Cobra Stretch",
              sets: 2,
              reps: "20 sec hold",
              targetGroup: "Back",
              instructions:
                "Lift chest with hands under shoulders, keep hips down.",
            },
            {
              name: "Seated Forward Fold",
              sets: 2,
              reps: "30 sec hold",
              targetGroup: "Hamstrings",
              instructions: "Reach for toes while keeping back flat.",
            },
            {
              name: "Butterfly Stretch",
              sets: 2,
              reps: "30 sec",
              targetGroup: "Inner Thighs",
              instructions: "Press knees toward floor while holding feet.",
            },
            {
              name: "Pigeon Pose",
              sets: 2,
              reps: "30 sec",
              targetGroup: "Hips",
              instructions: "Bring one leg forward and stretch the back leg.",
            },
            {
              name: "Bridge Pose",
              sets: 2,
              reps: "30 sec",
              targetGroup: "Back, Glutes",
              instructions:
                "Lift hips off floor with feet flat and arms at sides.",
            },
            {
              name: "Neck Rolls",
              sets: 2,
              reps: "5",
              targetGroup: "Neck",
              instructions: "Roll neck gently in circular motion.",
            },
            {
              name: "Side Stretch",
              sets: 2,
              reps: "5",
              targetGroup: "Obliques",
              instructions: "Reach one arm over head, lean sideways.",
            },
            {
              name: "Standing Forward Bend",
              sets: 2,
              reps: "30 sec",
              targetGroup: "Back, Hamstrings",
              instructions: "Fold at hips, relax neck and hang arms down.",
            },
            {
              name: "Upward Salute",
              sets: 2,
              reps: "5",
              targetGroup: "Shoulders",
              instructions: "Reach arms overhead, look up and lengthen spine.",
            },
            {
              name: "Lizard Pose",
              sets: 2,
              reps: "30 sec",
              targetGroup: "Hip Flexors",
              instructions: "Step foot outside hand, lower hips.",
            },
            {
              name: "Thread the Needle",
              sets: 2,
              reps: "30 sec",
              targetGroup: "Shoulders, Spine",
              instructions: "Thread arm under chest while on all fours.",
            },
            {
              name: "Low Lunge",
              sets: 2,
              reps: "30 sec",
              targetGroup: "Hip Flexors",
              instructions: "Step forward into lunge, press hips forward.",
            },
            {
              name: "Happy Baby",
              sets: 2,
              reps: "30 sec",
              targetGroup: "Lower Back",
              instructions:
                "Hold feet with knees bent and pulled toward chest.",
            },
          ],
        },
        {
          category: "HIIT",
          totalWorkouts: 12,
          workouts: [
            {
              name: "Burpees",
              sets: 3,
              reps: "12",
              targetGroup: "Full Body",
              instructions: "Drop to floor, jump up explosively, repeat.",
            },
            {
              name: "Jump Squats",
              sets: 3,
              reps: "15",
              targetGroup: "Legs",
              instructions: "Squat down and explode upward.",
            },
            {
              name: "Mountain Climbers",
              sets: 3,
              reps: "40 sec",
              targetGroup: "Core, Legs",
              instructions:
                "Alternate knees to chest quickly in plank position.",
            },
            {
              name: "High Knees",
              sets: 3,
              reps: "30 sec",
              targetGroup: "Legs, Core",
              instructions: "Run in place lifting knees high.",
            },
            {
              name: "Lunges",
              sets: 3,
              reps: "12",
              targetGroup: "Legs, Glutes",
              instructions: "Step forward and lower body until knees are 90°.",
            },
            {
              name: "Skaters",
              sets: 3,
              reps: "30 sec",
              targetGroup: "Legs, Balance",
              instructions: "Jump side to side landing on one leg.",
            },
            {
              name: "Push-Ups",
              sets: 3,
              reps: "15",
              targetGroup: "Chest, Arms",
              instructions: "Lower body to ground, push back up.",
            },
            {
              name: "Plank Jacks",
              sets: 3,
              reps: "30 sec",
              targetGroup: "Core, Legs",
              instructions:
                "In plank, jump feet in and out like jumping jacks.",
            },
            {
              name: "Tuck Jumps",
              sets: 3,
              reps: "10",
              targetGroup: "Legs, Core",
              instructions: "Jump and bring knees to chest mid-air.",
            },
            {
              name: "Jump Lunges",
              sets: 3,
              reps: "12",
              targetGroup: "Legs, Glutes",
              instructions: "Lunge then jump and switch legs mid-air.",
            },
            {
              name: "Bear Crawl",
              sets: 3,
              reps: "20m",
              targetGroup: "Shoulders, Core",
              instructions: "Crawl forward on hands and feet with hips low.",
            },
            {
              name: "Battle Ropes",
              sets: 3,
              reps: "30 sec",
              targetGroup: "Arms, Shoulders",
              instructions: "Wave heavy ropes quickly and powerfully.",
            },
          ],
        },
      ],
    },
  ];
  const categories = workouts[0].workoutCategories;

  // Get all workouts for display
  const getAllWorkouts = () => {
    let allWorkouts = [];
    categories.forEach((category) => {
      // Add category name to each workout
      const workoutsWithCategory = category.workouts.map((workout) => ({
        ...workout,
        categoryName: category.category,
      }));
      allWorkouts = [...allWorkouts, ...workoutsWithCategory];
    });
    return allWorkouts;
  };

  // Filter workouts based on active category
  const getFilteredWorkouts = () => {
    if (!activeCategory) {
      return getAllWorkouts();
    }

    const categoryData = categories.find(
      (cat) => cat.category === activeCategory
    );
    if (!categoryData) return [];

    return categoryData.workouts.map((workout) => ({
      ...workout,
      categoryName: categoryData.category,
    }));
  };

  const filteredWorkouts = getFilteredWorkouts();

  const openModal = (workout) => {
    setSelectedWorkout(workout);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWorkout(null);
  };

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null); // Show all workouts
    } else {
      setActiveCategory(category); // Filter by this category
    }
  };

  return (
    <div>
      <Header />
      <section className="bg-white py-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-myfit-800 mb-8 text-center">
            Workout Library
          </h2>

          {/* Category Filter Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl shadow-md border transition-all cursor-pointer
                  ${
                    activeCategory === category.category
                      ? "bg-myfit-500 text-white"
                      : "bg-myfit-50 hover:bg-myfit-100"
                  }`}
                onClick={() => toggleCategory(category.category)}
              >
                <h3
                  className={`text-xl font-semibold ${
                    activeCategory === category.category
                      ? "text-white"
                      : "text-myfit-800"
                  }`}
                >
                  {category.category}
                </h3>
                <p
                  className={`text-sm mb-2 ${
                    activeCategory === category.category
                      ? "text-myfit-50"
                      : "text-gray-600"
                  }`}
                >
                  {category.totalWorkouts} Workouts
                </p>
                <p
                  className={`text-sm ${
                    activeCategory === category.category
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  {category.category === "Strength" &&
                    "Build muscle and increase strength"}
                  {category.category === "Cardio" &&
                    "Improve endurance and burn calories"}
                  {category.category === "Yoga" &&
                    "Enhance mobility and reduce stress"}
                  {category.category === "HIIT" &&
                    "High-intensity interval workouts"}
                </p>
              </div>
            ))}
          </div>

          {/* Green Gradient Divider */}
          <div
            className="w-full h-[1px] rounded-full mb-8"
            style={{
              backgroundImage:
                "linear-gradient(to right, #f0fdfa, #2dd4bf, #f0fdfa)",
            }}
          ></div>

          {/* Filter Status */}
          {activeCategory && (
            <div className="mb-6 text-center">
              <span className="inline-flex items-center bg-myfit-100 text-myfit-800 px-4 py-2 rounded-full">
                <span>Showing: {activeCategory}</span>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="ml-2 p-1 hover:bg-myfit-200 rounded-full"
                >
                  &times;
                </button>
              </span>
            </div>
          )}

          {/* Workout Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkouts.map((workout, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition-all cursor-pointer"
                onClick={() => openModal(workout)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-myfit-600">
                    {workout.name}
                  </h3>
                  <span className="text-xs bg-myfit-50 text-myfit-700 px-2 py-1 rounded-full">
                    {workout.categoryName}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{workout.targetGroup}</p>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredWorkouts.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">
                No workouts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Workout Modal */}
      {isModalOpen && selectedWorkout && (
        <WorkoutModal
          workout={selectedWorkout}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
      <Footer/>
    </div>
  );
};

export default Workouts;