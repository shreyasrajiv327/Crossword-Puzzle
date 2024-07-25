(function($) {
    $(function() {
        // Function to load puzzle data based on difficulty level
        function loadPuzzleData() {
            var difficulty = localStorage.getItem('crosswordDifficulty') || 'easy';
            var data;

            // Choose data based on difficulty
            if (difficulty === 'easy') {
                data = window.easyData; // Access the global easyData variable
            } 
            else if (difficulty === 'medium') {
                data = window.mediumData;
            } 
            // else if (difficulty === 'hard') {
            //     data = hardData;
            // }

            if (data) {
                // Initialize crossword puzzle with the loaded data
                $('#puzzle-wrapper').crossword(data);
            } else {
                console.error('Failed to load puzzle data for ' + difficulty);
            }
        }

        // Load puzzle data when the page is ready
        loadPuzzleData();
    });
})(jQuery);
