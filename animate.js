console.clear();

const frames = [
  { path: "frames/Background (7000ms).png", delay: 7000 },
  { path: "frames/Frame 2 (250ms) (replace).png", delay: 250 },
  { path: "frames/Frame 3 (250ms) (replace).png", delay: 250 },
  { path: "frames/Frame 4 (250ms) (replace).png", delay: 250 },
  { path: "frames/Frame 5 (250ms) (replace).png", delay: 250 },
  { path: "frames/Frame 6 (3000ms) (replace).png", delay: 3000 },
  { path: "frames/Frame 7 (1000ms) (replace).png", delay: 1000 },
  { path: "frames/Frame 8 (1000ms) (replace).png", delay: 1000 },
  { path: "frames/Frame 9 (1000ms) (replace).png", delay: 1000 },
  { path: "frames/Frame 10 (1000ms) (replace).png", delay: 1000 },
  { path: "frames/Frame 11 (100ms) (replace).png", delay: 100 }
]
var current_frame = 0;

function updateIcon() {
  current_frame = (current_frame + 1) % frames.length
  chrome.browserAction.setIcon({ path: frames[current_frame].path });
  window.setTimeout(updateIcon, frames[current_frame].delay);
}

updateIcon();