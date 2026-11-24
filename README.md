# CampusFind - Lost & Found Portal

## Run
1. Open this folder in VS Code.
2. Run `npm install`
3. Run `npm run dev`
4. Open the localhost URL shown by Vite.

## New hook functionality
- `src/hooks/useItems.js` contains `ItemsProvider` and `useItems`.
- Report Lost / Report Found forms use React hooks (`useState`) for controlled inputs.
- Submitted items are added immediately to the shared React state.
- Items are saved to browser `localStorage`, so they remain after refresh.
- Lost Items, Found Items, Home, Item Details and Dashboard all read the same shared state.

This is still frontend-only. Spring Boot + MySQL can replace localStorage later.
