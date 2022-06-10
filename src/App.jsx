import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         <Post 
            author="Thamis Medina" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam eum quibusdam unde cumque? Voluptatibus, nesciunt eligendi. Commodi explicabo magnam officiis incidunt dolores odit dolor neque repellendus, labore repellat voluptatem."
          />
          <Post
            author="Gabriel Buzzi"
            content="Lorem ipsum dolor sit amet consectetur"
          />  
        </main>
      </div>
    </div>
  )
}


