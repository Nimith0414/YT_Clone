<script>
      // JavaScript to enable video playback when clicking a video thumbnail
      document.addEventListener("DOMContentLoaded", () => {
    const videoPreviews = document.querySelectorAll(".video-preview");
    const main = document.querySelector("main");

    videoPreviews.forEach((preview) => {
        preview.addEventListener("click", () => {
            const isYouTubeLink = preview.getAttribute("data-youtube-link");
            const videoSrc = preview.getAttribute("data-src");
            const videoTitle = preview.querySelector(".video-title").textContent.trim();
            const videoAuthor = preview.querySelector(".video-author").textContent.trim();

            if (isYouTubeLink) {
                // Redirect to YouTube
                window.open(isYouTubeLink, "_blank");
            } else if (videoSrc) {
                // Show video locally
                main.innerHTML = `
                    <div class="video-player-container">
                        <video class="video-player" controls autoplay>
                            <source src="${videoSrc}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <div class="video-details">
                            <h1 class="video-title">${videoTitle}</h1>
                            <p class="video-author">${videoAuthor}</p>
                        </div>
                        <button class="back-button">Back to Videos</button>
                    </div>
                `;

                // Add functionality to the back button
                const backButton = document.querySelector(".back-button");
                backButton.addEventListener("click", () => {
                    location.reload(); // Reload the page to go back to the video grid
                });
            } else {
                alert("Video source not found!");
            }
        });
    });

    // Adding both local and YouTube links to video previews
    const previews = document.querySelectorAll(".video-preview");
    previews[0].setAttribute("data-src", "videos/video1.mp4");
    previews[0].setAttribute("data-youtube-link", "https://youtu.be/n2RNcPRtAiY?si=yMdEDmxcJv0PkU8B");

    previews[1].setAttribute("data-src", "videos/video2.mp4");
    previews[1].setAttribute("data-youtube-link", "https://youtu.be/mP0RAo9SKZk?si=tcud7hCgcrZZV3Ih");

    previews[2].setAttribute("data-src", "videos/video3.mp4");
    previews[2].setAttribute("data-youtube-link", "https://youtu.be/FgjPQQeTh1w?si=fif2C9r4Gm6tzptu");

    previews[3].setAttribute("data-src", "videos/video4.mp4");
    previews[3].setAttribute("data-youtube-link", "https://youtu.be/094y1Z2wpJg?si=orFjZjZ91Kc83wxE");

    previews[4].setAttribute("data-src", "videos/video5.mp4");
    previews[4].setAttribute("data-youtube-link", "https://youtu.be/86CQq3pKSUw?si=X7wyKHQU1h3jUxW5");

    previews[5].setAttribute("data-src", "videos/video6.mp4");
    previews[5].setAttribute("data-youtube-link", "https://youtu.be/yXWw0_UfSFg?si=Vysv7YVVoqt1xp32");

    previews[6].setAttribute("data-src", "videos/video7.mp4");
    previews[6].setAttribute("data-youtube-link", "https://youtu.be/fNVa1qMbF9Y?si=Hj3gbYHU-G85CYy7");

    previews[7].setAttribute("data-src", "videos/video8.mp4");
    previews[7].setAttribute("data-youtube-link", "https://youtu.be/lFm4EM1juls?si=dQEQ27e3squa9GjH");

    previews[8].setAttribute("data-src", "videos/video9.mp4");
    previews[8].setAttribute("data-youtube-link", "https://youtu.be/ixmxOlcrlUc?si=Lg29Dr0GMJtpQ5u9");

    previews[9].setAttribute("data-src", "videos/video10.mp4");
    previews[9].setAttribute("data-youtube-link", "https://youtu.be/R2vXbFp5C9o?si=vtQwtYaQTuZl9sAI");

    previews[10].setAttribute("data-src", "videos/video11.mp4");
    previews[10].setAttribute("data-youtube-link", "https://youtu.be/0nZuYyXET3s?si=m2xlo7T01DL6tnph");

    previews[11].setAttribute("data-src", "videos/video12.mp4");
    previews[11].setAttribute("data-youtube-link", "https://youtu.be/9iMGFqMmUFs?si=gkP4-3Z0JNNbMJ0m");
});
    </script>