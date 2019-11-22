import React from 'react';

function BottomNav() {
  return (
    <div>
      <nav class="nav nav-tabs nav-justified fixed-bottom">
        <a class="nav-item nav-link active" href="#">Today</a>
        <a class="nav-item nav-link" href="#">This Week</a>
        <a class="nav-item nav-link" href="#">This Month</a>
      </nav>
    </div>
  );
}

export default BottomNav;