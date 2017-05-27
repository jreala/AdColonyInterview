using System;
using System.IO;
using static TweetAcrostics.Constants;

namespace TweetAcrostics
{
    class Program
    {
        static void Main(string[] args)
        {
            if (File.Exists(TextFileDirectory + OutputFile))
            {
                File.Delete(TextFileDirectory + OutputFile);
            }

            File.Create(TextFileDirectory + OutputFile);

            var tweets = TextFile.ToList(TextFileDirectory + TweetRelativePath);
            var words = TextFile.ToList(TextFileDirectory + WordsRelativePath);
            var acrostics = new Acrostics();
            acrostics.Find(tweets, words);
            Console.WriteLine("---- Finished ----");
            Console.ReadLine();
        }
    }
}
