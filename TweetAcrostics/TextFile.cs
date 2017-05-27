using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace TweetAcrostics
{
    public static class TextFile
    {
        public static List<string> ToList(string location)
        {
            return File.ReadLines(location).ToList();
        }
    }
}