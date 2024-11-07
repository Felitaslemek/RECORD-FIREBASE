import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [item, setItem] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User Registered");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("User Logged in");
    } catch (error) {
      alert(error.message);
    };
  };

  const handleAddItem = async () => {
    if (item) {
      await addDoc(collection(db, 'items'), { name: item });
      setItem('');
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[url('imgb2.jpg')] bg-cover bg-center">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Firebase App</h1>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between mb-6">
          <button
            onClick={handleSignup}
            className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-stone-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
          >
            Sign Up
          </button>
          <button
            onClick={handleLogin}
            className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-stone-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
          >
            Login
          </button>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Add Item</h2>
          <input
            type="text"
            placeholder="Add an item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-300"
          />
        </div>

        <button
          onClick={handleAddItem}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default App;