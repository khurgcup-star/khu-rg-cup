using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

namespace KhuRgCupPreview
{
    internal static class Program
    {
        [STAThread]
        private static void Main()
        {
            string baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
            string applyPath = Path.Combine(baseDirectory, "apply.html");
            string indexPath = Path.Combine(baseDirectory, "index.html");
            string targetPath = File.Exists(applyPath) ? applyPath : indexPath;

            if (!File.Exists(targetPath))
            {
                MessageBox.Show(
                    "apply.html 파일을 찾을 수 없습니다. exe 파일을 사이트 폴더 안에서 실행해주세요.",
                    "KHU RG CUP Preview",
                    MessageBoxButtons.OK,
                    MessageBoxIcon.Warning);
                return;
            }

            Process.Start(new ProcessStartInfo
            {
                FileName = targetPath,
                UseShellExecute = true
            });
        }
    }
}
