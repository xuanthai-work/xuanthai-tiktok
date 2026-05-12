import 'package:flutter/material.dart';
import '../suoc/link_file.dart';
import '../widgets/rotating_avatar.dart';
import '../widgets/bio_info.dart';
import '../widgets/gradient_divider.dart';
import '../widgets/social_links.dart';
import '../widgets/icon_link_button.dart';
import '../widgets/donate_section.dart';

class BioLinkPage extends StatelessWidget {
  const BioLinkPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage(backgroundPath),
                fit: BoxFit.cover,
              ),
            ),
          ),
          SingleChildScrollView(
            physics: const BouncingScrollPhysics(),
            child: Container(
              color: Colors.black.withValues(alpha: 0.3),
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 50),
              child: const Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    RotatingAvatar(
                      size: 220,
                      gradientWidth: 5,
                      shadowBlur: 20,
                      shadowSpread: 5,
                      padding: 5,
                    ),
                    SizedBox(height: 20),
                    BioInfo(titleSize: 50, subtitleSize: 16),
                    SizedBox(height: 20),
                    GradientDivider(),
                    SizedBox(height: 40),
                    SocialLinks(iconSize: 50, spacing: 5, runSpacing: 5),
                    SizedBox(height: 40),
                    GradientDivider(),
                    SizedBox(height: 40),
                    Text(
                      'Đồ tôi dùng ở đây nhé @@',
                      style: TextStyle(color: Colors.white, fontSize: 18),
                    ),
                    SizedBox(height: 5),
                    _DownArrow(),
                    SizedBox(height: 20),
                    IconLinkButton(
                      url: shopUrl,
                      iconPath: 'assets/images/tap-here.png',
                      size: 50,
                    ),
                    SizedBox(height: 50),
                    GradientDivider(),
                    DonateSection(imageSize: 200, fontSize: 20, borderRadius: 20),
                    SizedBox(height: 70),
                    Text(
                      "Weblink tôi tự code, anh em có góp ý gì hay cần gì thì mail tôi nhé!!!",
                      style: TextStyle(color: Colors.white),
                    ),
                    Text(
                      "< xuanthaibui204@gmail.com >",
                      style: TextStyle(color: Colors.white),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _DownArrow extends StatelessWidget {
  const _DownArrow();

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 20,
      width: 20,
      decoration: const BoxDecoration(
        image: DecorationImage(
          image: AssetImage('assets/images/downarrow.png'),
        ),
      ),
    );
  }
}
