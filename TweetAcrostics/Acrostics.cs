using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using static TweetAcrostics.Constants;

namespace TweetAcrostics
{
    public class Acrostics
    {
        public void Find(List<string> tweets, List<string> words)
        {
            foreach (var line in tweets)
            {
                var sentence = line.Split(' ');
                if (sentence.Length < 4)
                {
                    continue;
                }

                var possibleAcrostic = sentence.Aggregate("", (current, word) => current + word.FirstOrDefault());
                if (words.Contains(possibleAcrostic))
                {
                    Console.WriteLine($"{possibleAcrostic} - {line}");
                    using (var stream = File.AppendText(TextFileDirectory + OutputFile))
                    {
                        stream.WriteLine($"{possibleAcrostic} - {line}");
                    }
                }
            }
        }
    }
}
