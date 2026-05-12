import 'package:bio_tiktok/homepage.dart';
import 'package:bio_tiktok/suoc/music_button.dart';
import 'package:flutter/material.dart';

class ClickToEnter extends StatelessWidget {
  const ClickToEnter({super.key});

  void _handleTap(BuildContext context) {
    // 🎵 Bắt đầu phát nhạc nền (không await để tránh chặn UI)
    MusicController().startBackgroundMusic();

    // 👉 Chuyển sang trang chính
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => const Homepage()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: InkWell(
        onTap: () => _handleTap(context),
        child: const Center(
          child: Text(
            'Tap',
            style: TextStyle(
              color: Colors.white,
              fontSize: 26,
              fontFamily: 'Zimra',
            ),
          ),
        ),
      ),
    );
  }
}
