import 'package:flutter/material.dart';
import '../suoc/link_file.dart';
import '../widgets/bio_background.dart';
import '../widgets/rotating_avatar.dart';
import '../widgets/bio_info.dart';
import '../widgets/social_links.dart';
import '../widgets/icon_link_button.dart';
import '../widgets/donate_section.dart';

class BioTabletPage extends StatelessWidget {
  const BioTabletPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: BioBackground(
        overlayOpacity: 0.3,
        padding: EdgeInsets.symmetric(horizontal: 50, vertical: 20),
        child: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Expanded(
                flex: 1,
                child: RotatingAvatar(
                  size: 260,
                  gradientWidth: 5,
                  shadowBlur: 20,
                  shadowSpread: 4,
                  padding: 5,
                ),
              ),
              Expanded(
                flex: 1,
                child: SingleChildScrollView(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      SizedBox(height: 30),
                      BioInfo(titleSize: 46, subtitleSize: 18),
                      SizedBox(height: 30),
                      SocialLinks(iconSize: 50, spacing: 10),
                      SizedBox(height: 50),
                      Text(
                        "Đồ tôi dùng ở đây nhé @@",
                        style: TextStyle(color: Colors.white, fontSize: 18),
                      ),
                      SizedBox(height: 10),
                      IconLinkButton(
                        url: shopUrl,
                        iconPath: 'assets/images/tap-here.png',
                        size: 50,
                      ),
                      SizedBox(height: 40),
                      DonateSection(imageSize: 180, fontSize: 20, borderRadius: 20),
                      SizedBox(height: 30),
                      Text(
                        "< xuanthaibui204@gmail.com >",
                        style: TextStyle(color: Colors.white),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
