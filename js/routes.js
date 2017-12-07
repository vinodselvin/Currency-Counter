var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  {
    path: '/history/',
    url: './pages/history.html',
    name: 'history',
  },
  {
    path: '/newcount/',
    url: './pages/newcount.html',
    name: 'newcount',
  },
  {
    path: '/resumecount/',
    url: './pages/newcount.html',
    name: 'resumecount',
  },
  {
    path: '/action-sheet/',
    componentUrl: './pages/action-sheet.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
