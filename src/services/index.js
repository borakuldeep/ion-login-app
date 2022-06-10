// user list - sorted by name - simulating how it would be stored in db (indexed by name and or id)
const users = [
    {
      id: 1,
      name: 'Alex',
      password: '12345!',
    },
    {
      id: 2,
      name: 'Brad',
      password: '12345!',
    },
    {
      id: 3,
      name: 'James',
      password: '12345!',
    },
    {
      id: 4,
      name: 'Julia',
      password: '12345!',
    },
    {
      id: 5,
      name: 'Kuldeep',
      password: '12345!',
    },
    {
      id: 6,
      name: 'Maria',
      password: '12345!',
    },
  ];
  
  // search user - a binary search (on a sorted array)
  const searchUser = (user) => {
    let start = 0,
      end = users.length - 1;
  
    while (start <= end) {
      // Find the mid index
      let mid = Math.floor((start + end) / 2);
  
      if (users[mid].name === user.name) {
        return users[mid].password === user.password
          ? { success: true, errorMessage: '' }
          : { success: false, errorMessage: 'Invalid user or password' };
      }
  
      // Else look in left or right half accordingly
      else if (users[mid].name < user.name) {
          start = mid + 1;
      }
      else end = mid - 1;
    }
  
    return { success: false, errorMessage: 'User not found' };
  };
  
  export const loginService = async (user) => {
    // simulate network delay 500ms to 3 seconds
    const delayFactor = Math.floor(Math.random() * 3) * 1000;
    await new Promise((r) => setTimeout(r, delayFactor || 500));
    return searchUser(user);
  };