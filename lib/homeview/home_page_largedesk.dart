import 'package:flutter/material.dart';
import '../suoc/link_file.dart';
import '../widgets/bio_background.dart';
import '../widgets/rotating_avatar.dart';
import '../widgets/bio_info.dart';
import '../widgets/social_links.dart';
import '../widgets/icon_link_button.dart';
import '../widgets/donate_section.dart';

class BioLargeDesktopPage extends StatelessWidget {
  const BioLargeDesktopPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: BioBackground(
        overlayOpacity: 0.35,
        padding: const EdgeInsets.all(20),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1600),
            child: const Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Expanded(
                  flex: 1,
                  child: RotatingAvatar(
                    size: 400,
                    gradientWidth: 8,
                    shadowBlur: 30,
                    shadowSpread: 6,
                    padding: 8,
                  ),
                ),
                SizedBox(width: 100),
                Expanded(
                  flex: 1,
                  child: SingleChildScrollView(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        BioInfo(titleSize: 70, subtitleSize: 26),
                        SizedBox(height: 40),
                        SocialLinks(
                          iconSize: 60,
                          spacing: 15,
                          runSpacing: 15,
                        ),
                        SizedBox(height: 60),
                        Text(
                          "Đồ tôi dùng ở đây nhé @@",
                          style: TextStyle(color: Colors.white, fontSize: 24),
                        ),
                        SizedBox(height: 15),
                        IconLinkButton(
                          url: shopUrl,
                          iconPath: 'assets/images/tap-here.png',
                          size: 60,
                        ),
                        SizedBox(height: 60),
                        DonateSection(
                          imageSize: 250,
                          fontSize: 28,
                          borderRadius: 30,
                        ),
                        SizedBox(height: 50),
                        Text(
                          "< xuanthaibui204@gmail.com >",
                          style: TextStyle(color: Colors.white, fontSize: 18),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
