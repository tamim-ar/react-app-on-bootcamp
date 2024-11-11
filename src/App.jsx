import Toggle from "./Toogle";

function App() {
   return (
      <div>
         <Toggle>
            <Toggle.Active>🟢</Toggle.Active>
            <Toggle.ToggleButton />
            <Toggle.Inactive>🔴</Toggle.Inactive>
         </Toggle>
      </div>
   );
}

export default App;