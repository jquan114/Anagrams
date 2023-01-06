// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once

var groupAnagrams = function(strs) {
    const map = new Map();

  for (const str of strs) {
    // Sort the string so that all anagrams map to the same key
    const key = str.split('').sort().join('');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  // Convert the map values to an array and return it
  return [...map.values()];
};

groupAnagrams([eat","tea","tan","ate","nat","bat"])

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
