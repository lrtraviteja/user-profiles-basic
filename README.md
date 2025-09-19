
# User Profiles Basic

A React application that displays user profiles fetched from a public API. Each profile includes an avatar, name, email, phone, address, website, and company name. The app uses custom CSS and React Context for state management.

## Features

- Fetches and displays 10 user profiles from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- Unique avatars generated via [DiceBear Avatars](https://api.dicebear.com/9.x/avataaars/)
- Loading indicator using `react-loader-spinner`
- Custom CSS for all components (no Bootstrap)
- Component-based folder structure
- State management with React Context

## Project Structure

```
src/
	components/
		UserCard/
			UserCard.js
			UserCard.css
		UserList/
			UserList.js
			UserList.css
	context/
		UserContext.js
	App.js
	index.js
	index.css
	...
public/
	index.html
	favicon.ico
	...
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the app in development mode

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for production

```bash
npm run build
```

## Main Dependencies

- React 19
- react-loader-spinner
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)
- [DiceBear Avatars](https://avatars.dicebear.com/)

## Customization

- All component styles are in their respective `.css` files under `src/components/`.
- User data fetching and state are managed in `src/context/UserContext.js`.
